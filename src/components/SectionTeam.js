import CardTeam from "./CardTeam";
import Pagination from "./Pagination";
import { cards } from '../data/team';
import React from "react";

function SectionTeam() {
  const [pages, setPages] = React.useState(cards);
  const [dot, setDot] = React.useState(0);

  function shiftPages(val) {
    let _dot = dot + val;

    if (_dot >= pages.length) {
      _dot = _dot - pages.length;
    } else if (_dot <0) {
      _dot = _dot + pages.length;
    }

    const arr = pages.splice(-val).concat(pages);
    setPages(arr);
    setDot(_dot);
  }

  return(
    <section className="section-team">
      <h2 className="section-team__title">
        НАША КОМАНДА
      </h2>
      <div className='section-team__cards'>
        {pages.map((card, index) =>
          <CardTeam key={index} card={card}/>
        )}
        <div onClick={()=>shiftPages(-1)} 
          className="nav-button nav-button__left"/>
        <div onClick={()=>shiftPages(1)} 
          className="nav-button nav-button__right"/>
      </div>

      <Pagination dot={dot}/>
    </section>
  );
}

export default SectionTeam;