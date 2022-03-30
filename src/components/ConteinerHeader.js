import CardNews from "./CardNews";
import next from "../images/Buttonroundnext.svg";
import prev from "../images/Buttonroundprev.svg";

function ConteinerHeader() {
    return (
        <div className="conteiner">
            <div className="conteiner__projects-header">
                <div>
                    <h1 className="conteiner__projects-title"><span className="conteiner__projects-title-string">Когнитивные технологии</span>, машинное обучение</h1>
                    <p className="conteiner__projects-paragraph">Системы прикладного искусственного интеллекта</p>
                </div>
                <a className="conteiner__projects-button" href="#">НАШИ ПРОЕКТЫ</a>
            </div>
            <div className="conteiner__about-header">
                <h1 className="conteiner__about-title">Несколько слов о нас</h1>
                <p className="conteiner__about-paragraph">Национальный центр когнитивных разработок – центр национальной технологической инициативы (НТИ), получивший государственную поддержку по направлению «Технологии машинного обучения и когнитивные технологии».</p>
            </div>
            <div className='cards'>
                <button className="conteiner__btn-prev">
                    <img className="prev" src={prev} alt="prev" />
                </button>
                <button className="conteiner__btn-next">
                    <img className="next" src={next} alt="next" />
                </button>
                <CardNews />
            </div>
        </div>
    );
}

export default ConteinerHeader;