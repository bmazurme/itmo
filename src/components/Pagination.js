function Pagination(props) {
  const arr = new Array(4).fill('d');  
  return(
    <ul className="pagination">
      {arr.map((item, index) =>
        <li key={`${item}-${index}`} 
            className={`pagination__dot ${index === props.dot && 'pagination__dot_active'}`}></li>
       )}
    </ul>
  );
}

export default Pagination;