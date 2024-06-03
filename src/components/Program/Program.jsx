import './Program.css';

function Program({program, onSaveProgram}) {
    return (
        <li className="program">
            <img className="program__image" src={program.img.src} alt={program.alt} />
            <div className="program__info">
                <h2 className="program__title">{program.title}</h2>
                <p className="program__description">{program.description}</p>
                <div className="program__buttons">
                    <button className="program__button program__button_more hover">Подробнее</button>
                    <button className="program__button program__button_add hover" onClick={() => onSaveProgram(program)}>Пройти</button>
                </div>
            </div>
        </li>
    );
}

export default Program;