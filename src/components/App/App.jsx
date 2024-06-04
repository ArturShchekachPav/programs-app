import './App.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import {useEffect, useState} from "react";
import Programs from "../Programs/Programs";
import PROFILE_DATA from '../../data/user-data.json';
import PROGRAMS from "../../data/programs-data.json";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [currentUser, setCurrentUser] = useState({});
    const [programs, setPrograms] = useState(null);
    const [showAllPrograms, setShowAllPrograms] = useState(true);

    const getUserData = () => Promise.resolve(PROFILE_DATA);

    const getPrograms = () => Promise.resolve(PROGRAMS);

    const getProfileData = () => Promise.all([getPrograms(), getUserData()]).then(([programsData, userData]) => {
        setCurrentUser(userData);
        setPrograms(programsData);
        setIsLoggedIn(true);
    })
        .catch(err => {
            setIsLoggedIn(false);
            return Promise.reject(err);
        });

    useEffect(() => {
        getProfileData().catch((err) => console.log(err));
    }, []);

    function onSaveProgram(targetProgram) {

        if(targetProgram.isSaved) {
            setShowAllPrograms(false);
            return;
        }

        const newProgramsArr = programs.map((program) => {
            if(program.id === targetProgram.id) {
                program.isSaved = true;
            }

            return program;
        });

        setPrograms(newProgramsArr);

        setShowAllPrograms(false);
    }

    if (isLoggedIn === null) {
        return (
            <div className="App">
                <main name="Загрузка...">
                </main>
            </div>
        );
    }

    if (isLoggedIn === false) {
        return (
            <div className="App">
                <main name="Ошибка входа">
                </main>
            </div>
        );
    }

  return (
    <div className="App">
      <Header avatar={currentUser.avatar} />
        <Main name={currentUser.name}>
            <Programs programs={showAllPrograms ? programs : programs.filter((program) => program.isSaved === true)} showAllPrograms={showAllPrograms} onSaveProgram={onSaveProgram} setShowAllPrograms={setShowAllPrograms}/>
        </Main>
      <Footer />
    </div>
  );
}

export default App;
