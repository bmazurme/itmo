function CardTeam() {
  let name = `Бобцов \n Алексей Алексеевич`;

  name.split(' ').forEach(txt => console.log(txt));


  return(
    <div className="card-team">
      <div className="card-team__photo">
      </div>
      <div className="card-team__name">
        {name}
      </div>
      <div className="card-team__position">
        Директор, профессор, ДТН
      </div>
    </div>
  );
}

export default CardTeam;