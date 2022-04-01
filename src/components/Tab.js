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
      <li key={index}> 
        <a className={`section-projects__tab ${index===active && 'section-projects__tab-active'}`}
           onClick={()=>handleClick(index)} 
           href="#project">{tab}
        </a>
      </li>)}
    </ul>
  );
}

export default Tab;