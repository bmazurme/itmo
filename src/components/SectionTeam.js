import CardTeam from "./CardTeam";
import Pagination from "./Pagination";
import { cards } from '../data/team';

function SectionTeam() {
  return(
    <section className="section-team">
      <h2 className="section-team__title">
        НАША КОМАНДА
      </h2>
      <div className='section-team__cards'>
        {cards.map((card, index) =>
          <CardTeam key={index} card={card}/>
        )}
        <div className="nav-button nav-button_back"></div>
        <div className="nav-button nav-button_forward"></div>
      </div>
      <Pagination/>
    </section>
  );
}

export default SectionTeam;