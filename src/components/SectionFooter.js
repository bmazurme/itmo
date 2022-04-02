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
            <p>
              Информация © 2020 Университет ИТМО
            </p>
            <p>
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
            <ul>
              <li>О центре</li>
              <li>О нас</li>
              <li>Главная</li>
              <li>Команда</li>
              <li>Лаборатория</li>
              <li>Контакты</li>
            </ul>
          </div>
          <div className="table__column">
          <ul>
              <li>Развитие</li>
              <li>Образование</li>
              <li>Аспирантура</li>
              <li>Магистратура</li>
              <li>Публикации</li>
              <li>Проекты</li>
            </ul>
          </div>
          <div className="table__column">
            <h3>
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