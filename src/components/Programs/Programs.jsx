import './Programs.css';
import Program from "../Program/Program";
import {useEffect, useState} from "react";

function Programs({programs, savedPrograms, setSavedPrograms, setShowAllPrograms, showAllPrograms}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [listOfPages, setListOfPages] = useState([]);

    useEffect(() => {
        let currentShowingProgramsList;
        if(showAllPrograms) {
            currentShowingProgramsList = programs.length;
        } else {
            currentShowingProgramsList = savedPrograms.length;
        }
        const numberOfPages = Math.ceil(currentShowingProgramsList / 4);
        if ((numberOfPages - currentPage) < 3) {

            const avaiblePagesArray = [numberOfPages];

            let i = 1;
            while (((numberOfPages - i) > 0) && avaiblePagesArray.length < 4) {
                avaiblePagesArray.push(numberOfPages - i);
                i = i + 1;
            }

            setListOfPages(avaiblePagesArray.reverse())
        } else if (currentPage === 1) {
            setListOfPages([currentPage, currentPage + 1, currentPage + 2, "...", numberOfPages]);
        } else {
            setListOfPages([currentPage - 1, currentPage, currentPage + 1, "...", numberOfPages]);
        }

    }, [currentPage, showAllPrograms, programs]);

    function onSaveProgram(program) {
        if(!savedPrograms.find((savedProgram) => savedProgram.id === program.id)) {
            setSavedPrograms([...savedPrograms, program]);
        }

        setShowAllPrograms(false);
    }

    function showPrograms(listOfPrograms) {
        return listOfPrograms.map((program) => {
            return <Program program={program} id={program.id} onSaveProgram={onSaveProgram}/>
        })
    }
    return (
        <div>
            <div className="programs__tabs">
                <button className={`programs__button ${showAllPrograms ? 'programs__button_active' : 'hover'}`} onClick={() => setShowAllPrograms(true)}>ВСЕ ПРОГРАММЫ</button>
                <button className={`programs__button ${!showAllPrograms ? 'programs__button_active' : 'hover'}`} onClick={() => setShowAllPrograms(false)}>МОИ ПРОГРАММЫ</button>
            </div>
            <ul className="programs">
                {console.log(savedPrograms)}
                {showAllPrograms ? showPrograms(programs.slice(4 * currentPage - 4, 4 * currentPage)): showPrograms(savedPrograms.slice(4 * currentPage - 4, 4 * currentPage))}
            </ul>
            {(listOfPages.length > 1) && <ul className="programs__pages-list">
                {listOfPages.map((numberOfPage) => {
                    return <li className="programs__page-count hover"
                               onClick={() => setCurrentPage(numberOfPage)}>{numberOfPage}</li>
                })
                }
            </ul>}
        </div>
    );
}

export default Programs;