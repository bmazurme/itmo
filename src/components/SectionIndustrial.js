import Card from './Card';

function SectionIndustrial() {
  const cards = [
    '',
    'mach',
    'data',
    'robo'
  ];

  return(
    <div className="section-industrial">
      <h2 className="section-industrial__title">INDUSTRIAL AI RESEARCH LAB</h2>

      <div className='section-industrial__cards'>
        {cards.map((type, index) => 
          <Card key={index} 
                type={type}
                title='Анализ социальных данных'
                content='Направление включает в себя исследования и разработки технологий МО и КТ'
          />
        )}
      </div>
    </div>
  );
}

export default SectionIndustrial;