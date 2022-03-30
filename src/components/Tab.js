function Tab () {
  const tabs = [ 'ВСЕ ПРОЕКТЫ', 'ГОС. ПРОЕКТЫ', 'СПЕЦПРОГРАММЫ', 'В РАЗРАБОТКЕ' ];
  return(
    <ul className="section-projects__tabs">
      {tabs.map((tab, index) =>
      <li> 
        <a className={`section-projects__tab ${index===0 && 'section-projects__tab-active'}`} href="#">{tab}
        </a>
      </li>)}
    </ul>
  );
}

export default Tab;