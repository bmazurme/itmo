import CardMagistr from "./CardMagistr";

function SectionMagistr() {
  return(
    <section className="block-magistr">
      <h2 className="block-magistr__title">ОБРАЗОВАНИЕ</h2>
      <p className="block-magistr__content">
        В образовательной деятельности НЦКР активно использует существующую в Университете ИТМО инфраструктуру и опыт реализации сетевых форм обучения, опираясь на вузы-диссеминаторы (ННГУ, ДВФУ, ФГБОУ ВО «МГТУ «СТАНКИН», НовГУ), а также профильную компанию ООО «НЦЭО» в области электронного и дистанционного образования. Реализуются образовательные программы различных форматов.
      </p>

      <CardMagistr/>

    </section>
  );
}

export default SectionMagistr;