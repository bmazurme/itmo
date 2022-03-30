import CardProject from "./CardProject";
import arrow from '../images/arrow-right.svg';

function SectionProjects() {
  const cards = [1,2,3,4]
  return(
    <section className="section-projects">
      <h2 className="section-projects__title">НАШИ ПРОЕКТЫ</h2>
      <ul className="section-projects__tabs">

        <li>
          <a className="section-projects__tab section-projects__tab-active" href="#">ВСЕ ПРОЕКТЫ</a>
        </li>
        <li>
          <a className="section-projects__tab" href="#">ГОС. ПРОЕКТЫ</a>
        </li>
        <li>
          <a className="section-projects__tab" href="#">СПЕЦПРОГРАММЫ</a>
        </li>
        <li>
          <a className="section-projects__tab" href="#">В РАЗРАБОТКЕ</a>
        </li>
      </ul>

      <div className="section-projects__cards">
        {cards.map((card, index)=> <CardProject key={index}/>)}
      </div>
      <ul className="section-projects__numbers">
        <li><a className="section-projects__number" href="#">
          <img className="section-projects__number-down_arrow" src={arrow} alt="down" />
        </a></li>
        <li><a className="section-projects__number" href="#">
          <img className="section-projects__number-right_arrow" src={arrow} alt="right" />
        </a></li>
        <li><a className="section-projects__number" href="#">1</a></li>
        <li><a className="section-projects__number" href="#">2</a></li>
        <li><a className="section-projects__number" href="#">3</a></li>
        <p className="section-projects__points">...</p>
        <li><a className="section-projects__number" href="#">30</a></li>
      </ul>
    </section>
  );
}

export default SectionProjects;