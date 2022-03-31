import CardTeam from "./CardTeam";
import Pagination from "./Pagination";
import { cards } from '../data/team';
import React from "react";
import { sliceArray, getDots, shiftPages } from "../utils/utils";

function SectionTeam() {
  const step = 4;
  const dots = getDots(cards, step);
  const arrSlides = sliceArray(cards, step);
  const [dot, setDot] = React.useState(0);
  const [pages, setPages] = React.useState(arrSlides);

  function handleClick(val) {
    const _dot = shiftPages(val, dot, pages);
    setDot(_dot);
  }

  return(
    <section className="section-team">
      <h2 id="team" className="section-team__title">
        НАША КОМАНДА
      </h2>
      <div className='section-team__cards'>
        <div className="section-team__group">
          {pages[dot].map((card, index) =>
            <CardTeam key={index} card={card}/>
          )}
        </div>
        <div onClick={()=>handleClick(-1)} 
          className="nav-button nav-button__left"/>
        <div onClick={()=>handleClick(1)} 
          className="nav-button nav-button__right"/>
      </div>
      <Pagination dots={dots} dot={dot}/>
    </section>
  );
}

export default SectionTeam;