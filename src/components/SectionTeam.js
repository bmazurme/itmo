import CardTeam from "./CardTeam";
import Pagination from "./Pagination";
import React from "react";
import SwiperTeam from "./SwiperTeam";

function SectionTeam(props) {
  return(
    <section className="section section_team">
      <h2 id="team" className="section-team__title">
          НАША КОМАНДА
        </h2>
      <div className="container">

        <div className='section-team__cards'>
          <SwiperTeam step={props.step}/>
        </div>
      </div>


    </section>
  );
}

export default SectionTeam;