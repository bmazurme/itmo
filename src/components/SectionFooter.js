import logoItmo from "../images/logoItmo.svg";
import Social from "./Social";
import { icons } from "../data/social";

function SectionFooter() {
  return(
    <section className="section-footer">
      <div className="section-footer__container">
      <img className="logo__image" src={logoItmo} alt="Логотип" />

        <div className="table">
          <div className="table__column">
            <p className="table__paragraph">
              Информация © 2020 Университет ИТМО
            </p>
            <p className="table__paragraph">
              Национальный центр когнитивных разработок – 
              центр национальной технологической инициативы 
              (НТИ), получивший государственную поддержку по 
              направлению «Технологии машинного обучения и 
              когнитивные технологии». Инфраструктурная 
              основа взаимодействия научных, образовательных 
              и промышленных организаций
            </p>
          </div>
          <div className="table__column">
            <ul className="table__list">
              <li className="table__item">О центре</li>
              <li className="table__item">О нас</li>
              <li className="table__item">Главная</li>
              <li className="table__item">Команда</li>
              <li className="table__item">Лаборатория</li>
              <li className="table__item">Контакты</li>
            </ul>
          </div>
          <div className="table__column">
          <ul  className="table__list">
              <li className="table__item">Развитие</li>
              <li className="table__item">Образование</li>
              <li className="table__item">Аспирантура</li>
              <li className="table__item">Магистратура</li>
              <li className="table__item">Публикации</li>
              <li className="table__item">Проекты</li>
            </ul>
          </div>
          <div className="table__column">
            <h3 className="table__title">
              г.Санкт-Петербург
            </h3>
            <p>
              199034, Санкт-Петербург,
              Биржевая линия, д. 4, лит. М,
              ауд. 302С
            </p>
            <p>
              +7 (812) 337-64-90
              +7 (812) 337-64-94
            </p>
            <p>
              anna.lutsenko@itmo.ru
            </p>
            <div className=""></div>
            <Social icons={icons}/>
          </div>
        </div>

      </div>
    </section>
  );
}

export default SectionFooter;