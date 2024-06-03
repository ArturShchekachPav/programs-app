import './NavBar.css';

function NavBar() {
    return (
        <nav className="nav-bar main__nav">
            <ul className="nav-bar__list">
                <li className="nav-bar__item nav-bar__item_active">ПРОГРАММЫ</li>
                <li className="nav-bar__item hover">ПРОФИЛЬ</li>
                <li className="nav-bar__item hover">СЕРТИФИКАТЫ</li>
            </ul>
        </nav>
    );
}

export default NavBar;