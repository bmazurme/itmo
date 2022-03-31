import React from "react";

function CardProject(props) {
  const [active, setActive] = React.useState(false);
  function handleClick() {
    setActive(!active);
  }
  return(
    <div className="card-project"
         onPointerEnter={handleClick}
         onPointerLeave={handleClick} 
      >
      <div className={`card-project__image ${active && 'card-project__image_active'}`}>
      </div>
      <div className="card-project__content">
        {props.card.content}
      </div>
      <a className="card-project__link">
        Подробнее
      </a>
    </div>
  );
}

export default CardProject;