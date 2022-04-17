import React from "react";
import SwiperTeam from "./SwiperTeam";

function SectionTeam(props) {
  return(
    <section className="section section_team">
      <h2 id="team" className="team__title">
          НАША КОМАНДА
      </h2>
      
      <div className="container">
        <div className='team__cards'>
          <SwiperTeam step={props.step}/>
        </div>
      </div>
    </section>
  );
}

export default SectionTeam;