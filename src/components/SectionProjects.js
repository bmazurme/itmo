import CardProject from "./CardProject";

function SectionProjects() {
  const cards = [1,2,3,4]
  return(
    <section className="section-projects">
      <h2 className="section-projects__title">НАШИ ПРОЕКТЫ</h2>
      <div className="section-projects__tabs">
        <div>ВСЕ ПРОЕКТЫ</div>
        <div>ВСЕ ПРОЕКТЫ</div>
        <div>СПЕЦПРОГРАММЫ</div>
        <div>В РАЗРАБОТКЕ</div>
      </div>

      <div className="section-projects__cards">
        {cards.map((card, index)=> <CardProject key={index}/>)}
      </div>

    </section>
  );
}

export default SectionProjects;