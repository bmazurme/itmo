import React from "react";

function Card(props) {
  const [active, setActive] = React.useState(false);
  const [popupOpened, setPopupOpened] = React.useState(false);

  function handleFocus(val) {
    setActive(val);
    setPopupOpened(false)
  }
  
  function handleClick() {
    setPopupOpened(true);
    props.handleCardClick();
  }

  return(
    <div className='card'>
      <div onPointerEnter={()=>handleFocus(true)}
           onPointerLeave={()=>handleFocus(false)} 
           className={`card__frame ${props.type && (`card__frame_${props.type}`)}`}>
        <div className='card__title'>
          {props.title}
        </div>
        <div className={`card__icon card__icon_${props.type}`}/>
        <div className='card__content'>
          {props.content}
        </div>
        <div onClick={handleClick}
             className={`card__button ${active && 'card__button_active'} ${popupOpened && 'card__button_opened'}` }>
          Подробнее
        </div>
      </div>
    </div>
  );
}

export default Card;