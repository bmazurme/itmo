function Switcher(props) {
  return(
    <div className="switcher">
      <div onClick={() => props.handlerClick(false)}
           className={`switcher__button ${props.slide && 'switcher__button_white'}`}>
        АСПИРАНТУРА
      </div>
      <div onClick={() => props.handlerClick(true)}
           className={`switcher__button ${!props.slide && 'switcher__button_white'}`}>
        МАГИСТРАТУРА
      </div>
    </div>
  );
}

export default Switcher;