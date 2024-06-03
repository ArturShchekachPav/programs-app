import './App.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import {useEffect, useState} from "react";
import {PROGRAMS, PROFILE_DATA} from "../../utils/constants";
import Programs from "../Programs/Programs";

function App() {
    const [currentUser, setCurrentUser] = useState({});
    const [programsList, setProgramsList] = useState([]);
    const [savedPrograms, setSavedPrograms] = useState([]);
    const [showAllPrograms, setShowAllPrograms] = useState(true);

    useEffect(() => {
        setCurrentUser(PROFILE_DATA);
        setProgramsList(PROGRAMS);
    }, []);

  return (
    <div className="App">
      <Header avatar={currentUser.avatar} />
        <Main name={currentUser.name}>
            <Programs programs={programsList} savedPrograms={savedPrograms} setSavedPrograms={setSavedPrograms} setShowAllPrograms={setShowAllPrograms} showAllPrograms={showAllPrograms}/>
        </Main>
      <Footer />
    </div>
  );
}

export default App;
