import React from "react";
import CardEducation from "./CardEducation";
import Switcher from "./Switcher";

function SectionEducation() {
  const [slide, setSlide] = React.useState(false);
  function handlerClick(val) {
    setSlide(val);
  }
  return(
    <section className="section-education">
      <h2 id="education" className="section-education__title">ОБРАЗОВАНИЕ</h2>
      <p className="section-education__content">
        В образовательной деятельности НЦКР активно использует существующую 
        в Университете ИТМО инфраструктуру и опыт реализации сетевых форм 
        обучения, опираясь на вузы-диссеминаторы (ННГУ, ДВФУ, ФГБОУ ВО 
        «МГТУ «СТАНКИН», НовГУ), а также профильную компанию ООО «НЦЭО» в 
        области электронного и дистанционного образования. Реализуются 
        образовательные программы различных форматов.
      </p>
      <CardEducation slide={slide}/>
      <Switcher slide={slide} 
                handlerClick={handlerClick}/>
    </section>
  );
}

export default SectionEducation;