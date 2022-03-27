import { cards } from "../data/education";

function CardMagistr(props) {
  const card = props.slide ? cards[1] : cards[0];
  return(
    <div className="card-magistr">
      <div className="card-magistr__box">
        <h2 className="card-magistr__title">
          {card.title}
        </h2>
        <ul className="card-magistr__list">
          {card.list.map((item, index) => 
            <li key={index}>{item}</li>
          )}
        </ul>
      </div>
      <a className="card-magistr__link" 
         href="#">
          Подробнее
        <div className="card-magistr__icon"/>  
      </a>
      <img src={card.slide} 
           alt="" 
           className="card-magistr__image"/>
    </div>
  );
}

export default CardMagistr;