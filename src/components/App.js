import '../index.css';
import CardProject from './CardProject';
import CardTeam from './CardTeam';
import CardArticle from'./CardArticle';
import CardNews from './CardNews';
import CardMagistr from './CardMagistr';

import SectionIndustrial from './SectionIndustrial';
import SectionProjects from './SectionProjects';
import SectionMagistr from './SectionMagistr';

import React from 'react';

function App() {
  return (
    <div className='page'>

      <div className='cards'>
        <CardProject/>
      </div>

      <div className='cards'>
        <CardTeam/>
      </div>

      <div className='cards'>
        <CardArticle/>
      </div>

      <div className='cards'>
        <CardNews/>
      </div>

      <div className='cards'>
        <CardMagistr/>
      </div>

      <div className='cards'>
        <SectionIndustrial/>
      </div>

      <div className='cards'>
        <SectionProjects/>
      </div>


      <div className='cards'>

        <SectionMagistr/>
      </div>


    </div>
  );
}

export default App;
