import React from "react";
import { Link } from "react-scroll";
import SwiperNews from "./SwiperNews";

function ContainerHeader(props) {
  return (
    <div className="container">
      <div className="header-container">
        <div>
          <h1 className="header-container__title">
            Когнитивные технологии
            <span className="header-container__title_light">
              , машинное обучение
            </span>
          </h1>
          <p className="header-container__paragraph">
            Системы прикладного искусственного интеллекта
          </p>
        </div>

        <Link href="projects" 
              className="header-container__button" 
              spy={true}
              smooth={true}
              to="projects">
              НАШИ ПРОЕКТЫ
        </Link>

        </div>
        <div className="about">
          <h2 id="about" className="header-container__title header-container__title_about">
            Несколько слов о нас
          </h2>
          <p className="about__paragraph">
            Национальный центр когнитивных разработок – центр национальной 
            технологической инициативы (НТИ), получивший государственную 
            поддержку по направлению «Технологии машинного обучения и 
            когнитивные технологии».
          </p>
        </div>
        <div className="news">
          <SwiperNews step={props.step}/>
        </div>
    </div>
  );
}

export default ContainerHeader;