function CardMagistr() {
  const list = [
    'Прикладные технологии искусственного интеллекта;',
    'Машинное обучение и искусственный интеллект;',
    'Биометрические информационные системы;',
    'Речевые информационные системы;',
    'Когнитивные вычисления и квантовый интеллект;',
    'Большие данные и экстренные вычисления;',
    'Семантические системы и инженерия знаний;',
    'Технологии разработки компьютерных игр'
  ];

  return(
    <div className="card-magistr">
      <div className="card-magistr__box">
        <h2 className="card-magistr__title">
          Образовательные программы аспирантуры в области МО и КТ
        </h2>
        <ul className="card-magistr__list">
          {list.map((item, index) => 
            <li key={index}>{item}</li>
          )}
        </ul>
      </div>
      <a className="card-magistr__link" href="#">
        Подробнее
        <div className="card-magistr__icon"/>  
      </a>

      <img className="card-magistr__image"></img>
    </div>
  );
}

export default CardMagistr;