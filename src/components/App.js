import '../index.css';
import Card from './Card';
import CardProject from './CardProject';
import CardTeam from './CardTeam';
import CardArticle from'./CardArticle';
import CardNews from './CardNews';
import CardMagistr from './CardMagistr';

import SectionProjects from './SectionProjects';
import SectionMagistr from './SectionMagistr';

import React from 'react';

const cards = [
  '',
  'mach',
  'data',
  'robo'
];

function App() {
  return (
    <div className='page'>
      <div className='cards'>
        {cards.map((type, index) => 
          <Card key={index} 
                type={type}
                title='Анализ социальных данных'
                content='Направление включает в себя исследования и разработки технологий МО и КТ'
          />
        )}
      </div>

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
        <SectionProjects/>
      </div>


      <div className='cards'>

        <SectionMagistr/>
      </div>


    </div>
  );
}

export default App;
