import CardArticle from "./CardArticle";
import Pagination from "./Pagination";
import { sliceArray, getDots, shiftPages } from "../utils/utils";
import React from "react";
import { cards } from "../data/article";

function SectionArticles(props) {
  const dots = getDots(cards, props.step);
  const arrSlides = sliceArray(cards, props.step);
  const [dot, setDot] = React.useState(0);
  const [pages, setPages] = React.useState(arrSlides);

  React.useEffect(() => {
    setPages(sliceArray(cards, props.step));
  }, [props.step] )

  function handleClick(val) {
    const _dot = shiftPages(val, dot, pages);
    setDot(_dot);
  }

  return(
    <section className="section section_articles">
      <h2 id="articles" className="articles__title">
        Публикации
      </h2>
      <div className="articles__cards">
        <div className="article__group">
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
    </section>
  );
}

export default SectionArticles;