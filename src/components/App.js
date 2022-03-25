import '../index.css';
import Card from './Card';
import CardProject from './CardProject';
import CardTeam from './CardTeam';
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

    </div>
  );
}

export default App;
