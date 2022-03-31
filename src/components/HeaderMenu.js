import React from "react";

function HeaderMenu(props) {
  const [active, setActive] = React.useState(0);

  function handleClick(index, path) {
    setActive(index);
  }

  return(
    <nav className="nav__header">
      <ul className="nav__lists">
        {props.links.map((link, index) => 
          <li key={index} className="nav__list-size">
            <a onClick={()=>handleClick(index, link.path)} 
               className={`nav__list ${index===active ? 'nav__list-active' : ''}`} 
               href="#"
               >
              {link.name}
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default HeaderMenu;