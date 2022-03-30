import CardTeam from "./CardTeam";
import Pagination from "./Pagination";
import { cards } from '../data/team';
import React from "react";

function SectionTeam() {
  const step = 4;
  let dots = cards.length % step;

  if ((cards.length / step-dots) > 0) {
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

  return(
    <section className="section-team">
      <h2 className="section-team__title">
        НАША КОМАНДА
      </h2>
      <div className='section-team__cards'>
        <div className="section-team__group">
          {pages[dot].map((card, index) =>
            <CardTeam key={index} card={card}/>
          )}
        </div>
        <div onClick={()=>shiftPages(-1)} 
          className="nav-button nav-button__left"/>
        <div onClick={()=>shiftPages(1)} 
          className="nav-button nav-button__right"/>
      </div>
      <Pagination dots={dots} dot={dot}/>
    </section>
  );
}

export default SectionTeam;