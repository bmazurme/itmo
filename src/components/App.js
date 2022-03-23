import '../index.css';
import Card from './Card';
import React from 'react';

const cards = [
  '',
  'card__icon_brain',
  'card__icon_cpu',
  'card__icon_robo'
];

function App() {
  return (
    <div className="page">
      <div className='cards'>
        {cards.map((type, index) => <Card key={index} type={type}/>)}
      </div>
    </div>
  );
}

export default App;
