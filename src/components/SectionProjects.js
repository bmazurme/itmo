import CardProject from "./CardProject";
import arrow from '../images/arrow-right.svg';
import { cards } from "../data/project";
import Tab from "./Tab";

function SectionProjects(props) {
  return(
    <section className="section-projects">
      <h2 id="projects" className="section-projects__title">НАШИ ПРОЕКТЫ</h2>
      <Tab/>

      <div className="section-projects__cards">
        {cards.map((card, index) => 
          <CardProject card={card} key={index}/>)}
      </div>

      <ul className="section-projects__numbers">
        <li><a className="section-projects__number" href="#">
          <img className="section-projects__number-down_arrow" 
               src={arrow} alt="down" />
        </a></li>
        <li><a className="section-projects__number" href="#">
          <img className="section-projects__number-right_arrow" 
               src={arrow} alt="right" />
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