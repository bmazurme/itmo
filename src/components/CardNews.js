function CardNews() {
  const {date, title, content} = {
    date: 'Понедельник, 5 июля 2021г',
    title: 'ЗНАКОМСТВО С МАШИННЫМ ОБУЧЕНИЕМ: СТУДЕНТЫ ЕВРАЗИЙСКОГО НАЦИОНАЛЬ…',
    content: 'Университет ИТМО провел научно-исследовательскую стажировку для группы магистрантов из Евразийского национального университета имени Л.Н. Гумилева. Ведущие преподаватели  в течение десяти дней рассказывали им об основах машинного обучения. '
  }
  return(
    <div className="card-news">
      <div className="card-news__pin"/>
      <div className="card-news__date">
        {date}
      </div>
      <div className="card-news__title">
        {title}
      </div>
      <div className="card-news__line"/>
      <div className="card-news__content">
        {content}
      </div>
    </div>
  );
}

export default CardNews;