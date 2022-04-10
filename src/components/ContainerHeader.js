import CardNews from "./CardNews";
import next from "../images/Buttonroundnext.svg";
import prev from "../images/Buttonroundprev.svg";
import { cards } from "../data/news";
import Pagination from "./Pagination";
import React from "react";
import { sliceArray, getDots, shiftPages } from "../utils/utils";
import { Link } from "react-scroll";

function ContainerHeader(props) {
  const dots = getDots(cards, props.step);
  const arrSlides = sliceArray(cards, props.step);
  const [dot, setDot] = React.useState(0);
  const [pages, setPages] = React.useState(arrSlides);

  function handleClick(val) {
    const _dot = shiftPages(val, dot, pages);
    setDot(_dot);
  }

  React.useEffect(() => {
    setPages(sliceArray(cards, props.step));
  }, [props.step] );
   
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
        <div className='cards'>
          <button onClick={()=>handleClick(-1)} 
                  className="container__btn-prev">
            <img className="prev" src={prev} alt="prev" />
          </button>
            <button onClick={()=>handleClick(1)} 
                    className="container__btn-next">
              <img className="next" src={next} alt="next" />
            </button>
            {pages[dot].map((card, index) =>
                <CardNews key={index} card={card}/>
            )}
        </div>
      <Pagination dots={dots} dot={dot}/>
    </div>
  );
}

export default ContainerHeader;