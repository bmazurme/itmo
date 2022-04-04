import { cards } from "../data/education";

function CardEducation(props) {
  const card = props.slide ? cards[1] : cards[0];
  return(
    <div className="card-education">
      <div className="card-education__box">
        <h2 className="card-education__title">
          {card.title}
        </h2>
        <ul className="card-education__list">
          {card.list.map((item, index) => 
            <li key={index}>{item}</li>
          )}
        </ul>
      </div>

      <img 
      src={card.slide} 
           alt="" 
           className="card-education__image"/>
      <a className="card-education__link" 
         href="#">
          Подробнее
        <div className="card-education__icon"/>  
      </a>
    </div>
  );
}

export default CardEducation;