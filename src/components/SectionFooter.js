import logoItmo from "../images/logoItmo.svg";
import Social from "./Social";
import { icons } from "../data/social";
import { links } from "../data/footer";
import { links2 } from "../data/footer";

function SectionFooter() {
  return(
    <section className="section section_footer">
      <div className="section-footer__container">
        <div className="table">
          <img className="logo__image" src={logoItmo} alt="Логотип" />

          <div className="table__copyright">
            Информация © 2020 Университет ИТМО
          </div>

          <div className="table__info">
            Национальный центр когнитивных разработок – 
            центр национальной технологической инициативы 
            (НТИ), получивший государственную поддержку по 
            направлению «Технологии машинного обучения и 
            когнитивные технологии». Инфраструктурная 
            основа взаимодействия научных, образовательных 
            и промышленных организаций
          </div>

          <div className="table__first">
            <ul className="table__list">
              {links.map((link, index) => 
                <li key={index} className="table__item">{link.name}</li>
              )}
            </ul>
          </div>

          <div className="table__second">
          <ul  className="table__list">
              {links2.map((link, index) => 
                <li key={index} className="table__item">{link.name}</li>
              )}
          </ul>
          </div>

          <div className="table__third">
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
            <div className="table__icons">
              <Social icons={icons} type='lt'/>
            </div>
          </div>
        </div>
      </div>

      <p className="section-footer__mark">
        Сделано студентами Яндекс. Практикума
      </p>
      
    </section>
  );
}

export default SectionFooter;