import CardArticle from "./CardArticle";
import Pagination from "./Pagination";
import { sliceArray, getDots, shiftPages } from "../utils/utils";
import React from "react";
import { cards } from "../data/article";

function SectionArticles() {
  const step = 3;
  const dots = getDots(cards, step);
  const arrSlides = sliceArray(cards, step);
  const [dot, setDot] = React.useState(0);
  const [pages, setPages] = React.useState(arrSlides);

  function handleClick(val) {
    const _dot = shiftPages(val, dot, pages);
    setDot(_dot);
  }

  return(
    <div className="section-articles">
      <h2 className="section-articles__title">
        Публикации
      </h2>
      <div className="section-articles__cards">
        <div className="section-article__group">
          {pages[dot].map((card, index) =>
              <CardArticle key={index} card={card}/>
          )}
        </div>

        <div onClick={()=>handleClick(-1)} 
             className="nav-button nav-button__left_light"/>
        <div onClick={()=>handleClick(1)} 
             className="nav-button nav-button__right_light"/>
      </div>
      <Pagination dots={dots} dot={dot}/>
    </div>
  );
}

export default SectionArticles;