function CardTeam(props) {
  const gap = props.card.name.indexOf(' ');

  return(
    <div className="card-team">
      <img src={props.card.photo} alt={props.card.name} 
           className="card-team__photo"/>
      <div className="card-team__name">
        <p className="card-team__paragraph">
          {props.card.name.slice(0, gap)}
        </p>
        <p className="card-team__paragraph">
          {props.card.name.slice(gap, props.card.name.length)}
        </p>
      </div>
      <div className="card-team__position">
        {props.card.position}
      </div>
    </div>
  );
}

export default CardTeam;