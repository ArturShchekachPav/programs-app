import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <ul className="footer__info">
                <li className="footer__item footer__item_rights">&#169; 2018-2023 Платформа, все права защищены</li>
                <li className="footer__item"><a href="#" className="footer__link hover">Контактная информация</a></li>
                <li className="footer__item"><a href="#" className="footer__link hover">Конфиденциальность</a></li>
                <li className="footer__item"><a href="#" className="footer__link hover">Пользовательское соглашение</a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;