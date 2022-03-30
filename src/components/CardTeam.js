function CardTeam() {
  const {name, position, photo} = {
    name: `Бобцов Алексей Алексеевич`,
    position: `Директор, профессор, ДТН`,
    photo: require('../images/people/man_photo.jpg')
  };
  const gap = name.indexOf(' ');

  return(
    <div className="card-team">
      <img src={photo} alt={name} 
        className="card-team__photo"/>
      <div className="card-team__name">
        <p className="card-team__paragraph">
          {name.slice(0, gap)}
        </p>
        <p className="card-team__paragraph">
          {name.slice(gap, name.length)}
        </p>
      </div>
      <div className="card-team__position">
        {position}
      </div>
    </div>
  );
}

export default CardTeam;