import './Programs.css';
import Program from "../Program/Program";
import {useState, useMemo, useEffect} from "react";
import Pagination from "../Pagination/Pagination";
let PageSize = 4;

function Programs({programs, showAllPrograms, onSaveProgram, setShowAllPrograms}) {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return programs.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, showAllPrograms]);

    useEffect(() => {
        setCurrentPage(1);
    }, [showAllPrograms])


    if(programs === null) {
       return (
           <div>
               <div className="programs__tabs">
                   <button className={`programs__button ${showAllPrograms ? 'programs__button_active' : 'hover'}`} onClick={() => setShowAllPrograms(true)}>ВСЕ ПРОГРАММЫ</button>
                   <button className={`programs__button ${!showAllPrograms ? 'programs__button_active' : 'hover'}`} onClick={() => setShowAllPrograms(false)}>МОИ ПРОГРАММЫ</button>
               </div>
               <p>Загрузка...</p>
           </div>
           )
    }

    if(!programs.length) {
        return (
            <div>
                <div className="programs__tabs">
                    <button className={`programs__button ${showAllPrograms ? 'programs__button_active' : 'hover'}`} onClick={() => setShowAllPrograms(true)}>ВСЕ ПРОГРАММЫ</button>
                    <button className={`programs__button ${!showAllPrograms ? 'programs__button_active' : 'hover'}`} onClick={() => setShowAllPrograms(false)}>МОИ ПРОГРАММЫ</button>
                </div>
                <p className="programs__not-found">Нет активных программ</p>
            </div>
        )
    }

    return (
        <div>
            <div className="programs__tabs">
                <button className={`programs__button ${showAllPrograms ? 'programs__button_active' : 'hover'}`} onClick={() => setShowAllPrograms(true)}>ВСЕ ПРОГРАММЫ</button>
                <button className={`programs__button ${!showAllPrograms ? 'programs__button_active' : 'hover'}`} onClick={() => setShowAllPrograms(false)}>МОИ ПРОГРАММЫ</button>
            </div>
            <ul className="programs">
                {currentTableData.map((program) => {
                    return <Program program={program} key={program.id} onSaveProgram={onSaveProgram} showAllPrograms={showAllPrograms}/>
                })}
            </ul>
            <Pagination
                className="programs__pagination-bar"
                currentPage={currentPage}
                totalCount={programs.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </div>
    );
}

export default Programs;