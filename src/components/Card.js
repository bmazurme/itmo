import React from "react";

function Card(props) {
  const [active, setActive] = React.useState(false);
  function handleClick() {
    setActive(!active);
  }
  return(
    <div className='card'>
      <div onPointerEnter={handleClick}
           onPointerLeave={handleClick} 
           className={`card__frame ${props.type && (`card__frame_${props.type}`)}`}>
        <div className='card__title'>
          {props.title}
        </div>
        <div className={`card__icon card__icon_${props.type}`}/>
        <div className='card__content'>
          {props.content}
        </div>
        <div className={`card__button ${active && 'card__button_active'}`}>
          Подробнее
        </div>
      </div>
    </div>
  );
}

export default Card;