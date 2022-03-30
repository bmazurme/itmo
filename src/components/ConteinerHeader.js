import CardNews from "./CardNews";
import next from "../images/Buttonroundnext.svg";
import prev from "../images/Buttonroundprev.svg";
import { cards } from "../data/news";
import Pagination from "./Pagination";
import React from "react";

function ConteinerHeader() {
    const step = 3;
    let dots = Math.trunc(cards.length / step);
    if ((cards.length / step - dots) > 0) {
      dots+=1;
    }
  
    const arrSlides = [];
    for (let i = 0; i < Math.ceil(cards.length/step); i++){
      arrSlides[i] = cards.slice((i*step), (i*step) + step);
    }
  
    const [dot, setDot] = React.useState(0);
    const [pages, setPages] = React.useState(arrSlides);
  
    function shiftPages(val) {
      let _dot = dot + val;   
      if (_dot >= pages.length) {
        _dot = _dot - pages.length;
      } else if (_dot < 0) {
        _dot = _dot + pages.length;
      }
      setDot(_dot);
    }

    return (
        <div className="conteiner">
            <div className="conteiner__projects-header">
                <div>
                    <h1 className="conteiner__projects-title">
                        <span className="conteiner__projects-title-string">
                            Когнитивные технологии</span>, машинное обучение</h1>
                    <p className="conteiner__projects-paragraph">
                        Системы прикладного искусственного интеллекта</p>
                </div>
                <a className="conteiner__projects-button" href="#">НАШИ ПРОЕКТЫ</a>
            </div>
            <div className="conteiner__about-header">
                <h1 className="conteiner__about-title">
                    Несколько слов о нас</h1>
                <p className="conteiner__about-paragraph">
                    Национальный центр когнитивных разработок – центр национальной 
                    технологической инициативы (НТИ), получивший государственную 
                    поддержку по направлению «Технологии машинного обучения и 
                    когнитивные технологии».</p>
            </div>
            <div className='cards'>
                <button onClick={()=>shiftPages(-1)} className="conteiner__btn-prev">
                    <img className="prev" src={prev} alt="prev" />
                </button>
                <button onClick={()=>shiftPages(1)} className="conteiner__btn-next">
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

export default ConteinerHeader;