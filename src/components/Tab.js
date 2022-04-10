import React from "react";

function Tab () {
  const [active, setActive] = React.useState(0);
  const tabs = [ 'ВСЕ ПРОЕКТЫ', 'ГОС. ПРОЕКТЫ', 'СПЕЦПРОГРАММЫ', 'В РАЗРАБОТКЕ' ];
  function handleClick(val) {
    setActive(val);
  }

  return(
    <ul className="section-projects__tabs">
      {tabs.map((tab, index) =>
      <li className={`section-projects__tab`} key={index}> 
        <a className={`section-projects__link ${index===active && 'section-projects__link-active'}`}
           onClick={()=>handleClick(index)} 
           href="#project">{tab}
        </a>
      </li>)}
    </ul>
  );
}

export default Tab;