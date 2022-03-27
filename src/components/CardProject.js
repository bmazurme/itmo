function CardProject() {
  const {content} = {
    content: 'Направление включает в себя исследования и разработки технологий МО и КТ. Модули для внедрения в предметные сетевые программы магистратуры с элементами МО и КТ, илипрограммы ДПО.'
  }
  return(
    <div className="card-project">
      <div className="card-project__image">
      </div>
      <div className="card-project__content">
        {content}
      </div>
      <a className="card-project__link">
        Подробнее
      </a>
    </div>
  );
}

export default CardProject;