import Card from './Card';
import { cards } from '../data/industrial';

function SectionIndustrial() {
  return(
    <div className="section-industrial">
      <h2 className="section-industrial__title">
        INDUSTRIAL AI RESEARCH LAB
      </h2>
      <div className='section-industrial__cards'>
        {cards.map((card, index) => 
          <Card key={index} 
                type={card.type}
                title={card.title}
                content={card.content}
          />
        )}
      </div>
    </div>
  );
}

export default SectionIndustrial;