function CardNews(props) {
  return (
      <div className="card-news">
        <div className="card-news__pin" />
        <div className="card-news__date">
          {props.card.date}
        </div>
        <div className="card-news__title">
          {props.card.title}
        </div>
        <div className="card-news__line" />
        <div className="card-news__content">
          {props.card.content}
        </div>
      </div>
  );
}

export default CardNews;