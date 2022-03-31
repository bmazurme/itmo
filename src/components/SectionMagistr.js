import React from "react";
import CardMagistr from "./CardMagistr";
import Switcher from "./Switcher";

function SectionMagistr() {
  const [slide, setSlide] = React.useState(false);
  function handlerClick(val) {
    setSlide(val);
  }
  return(
    <section className="section-magistr">
      <h2 id="education" className="section-magistr__title">ОБРАЗОВАНИЕ</h2>
      <p className="section-magistr__content">
        В образовательной деятельности НЦКР активно использует существующую 
        в Университете ИТМО инфраструктуру и опыт реализации сетевых форм 
        обучения, опираясь на вузы-диссеминаторы (ННГУ, ДВФУ, ФГБОУ ВО 
        «МГТУ «СТАНКИН», НовГУ), а также профильную компанию ООО «НЦЭО» в 
        области электронного и дистанционного образования. Реализуются 
        образовательные программы различных форматов.
      </p>
      <CardMagistr slide={slide}/>
      <Switcher slide={slide} 
                handlerClick={handlerClick}/>
    </section>
  );
}

export default SectionMagistr;