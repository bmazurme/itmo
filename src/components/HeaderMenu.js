import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function HeaderMenu(props) {
  const [active, setActive] = React.useState(0);
  function handleClick(index) {
    setActive(index);
  }
  return(
    <nav className="nav__header">
      <ul className="nav__lists">
        {props.links.map((link, index) => 
          <li key={index} className="nav__list-size">
            <Link href="link.path" className={`nav__list ${index===active ? 'nav__list-active' : ''}`} 
              onClick={()=>handleClick(index)}
              spy={true}
              smooth={true}
              to={link.path}>
              {link.name}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default HeaderMenu;