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
           className={`card__frame ${active && 'card__frame_active'}`}>

        <div className='card__title'>Анализ социальных данных</div>
        <div className={`card__icon ${props.type}`}></div>
        <div className='card__content'>Направление включает в себя исследования и разработки технологий МО и КТ</div>
        <div className={`card__button ${active && 'card__button_active'}`}>Подробнее</div>
      </div>
    </div>
  );
}

export default Card;