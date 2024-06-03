import './Main.css';
import NavBar from "../NavBar/NavBar";

function Main({name, children}) {
    return (
        <main className="main">
            <NavBar />
            <div className="main__info">
                <h1 className="main__profile-name">{name}</h1>
                {children}
            </div>
        </main>
    );
}

export default Main;