import Card from './Card';
import { cards } from '../data/industrial';

function SectionIndustrial() {
  return(
    <div className="section-industrial">
      <h2 className="section-industrial__title">
        INDUSTRIAL AI RESEARCH LAB
      </h2>

      <div className="section-industrial__container">

        <p className="section-industrial__paragraph">
          Центр национальной технологической инициативы (НТИ), 
          получивший государственную поддержку 
          по направлению «Технологии машинного обучения 
          и когнитивные технологии». 
        </p>
        
        <p className="section-industrial__paragraph">
          Мы изучаем проблемы и выявляем, когда мы работаем 
          вместе с нашими клиентами, новые решения 
          находят, не задумываясь. Работая таким образом 
          и проявляя гибкость, мы можем поддерживать новый 
          подход для удовлетворения потребностей наших клиентов.
        </p>

        <img className="section-industrial__image" src='' alt=''/>
        <img className="section-industrial__image" src='' alt=''/>
      </div>

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