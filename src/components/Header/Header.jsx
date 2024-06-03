import './Header.css';

function Header({avatar}) {
    return (
        <header className="header">
            <a href="#" className="header__logo">ЛОГОТИП</a>
            <button aria-label="Уведомления" className="header__button header__button_notification hover"
                    type="button"></button>
            <button aria-label="Аккаунт" className="header__button header__button_account hover" type="button" style={{backgroundImage: `url(${avatar})`}}></button>
        </header>
    );
}

export default Header;