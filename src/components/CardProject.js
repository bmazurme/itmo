import React from "react";
function CardProject() {
  const {content} = {
    content: 'Направление включает в себя исследования и разработки технологий МО и КТ. Модули для внедрения в предметные сетевые программы магистратуры с элементами МО и КТ, илипрограммы ДПО.'
  }
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
        {content}
      </div>
      <a className="card-project__link">
        Подробнее
      </a>
    </div>
  );
}

export default CardProject;