import CardTeam from "./CardTeam";
import Pagination from "./Pagination";
import { cards } from '../data/team';
import React from "react";
import { sliceArray, getDots, shiftPages } from "../utils/utils";

function SectionTeam(props) {
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

  return(
    <section className="section section_team">
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