import '../index.css';
import Card from './Card';
import React from 'react';

const cards = [
  '',
  'mach',
  'data',
  'robo'
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
