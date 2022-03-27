import CardMagistr from "./CardMagistr";

function SectionMagistr() {
  return(
    <section className="section-magistr">
      <h2 className="section-magistr__title">ОБРАЗОВАНИЕ</h2>
      <p className="section-magistr__content">
        В образовательной деятельности НЦКР активно использует существующую 
        в Университете ИТМО инфраструктуру и опыт реализации сетевых форм 
        обучения, опираясь на вузы-диссеминаторы (ННГУ, ДВФУ, ФГБОУ ВО 
        «МГТУ «СТАНКИН», НовГУ), а также профильную компанию ООО «НЦЭО» в 
        области электронного и дистанционного образования. Реализуются 
        образовательные программы различных форматов.
      </p>
      <CardMagistr/>
      <div className="section-magistr__switcher">
        <div className="section-magistr__button">
          АСПИРАНТУРА
        </div>
        <div className="section-magistr__button section-magistr__button_white">
          МАГИСТРАТУРА
        </div>
      </div>
    </section>
  );
}

export default SectionMagistr;