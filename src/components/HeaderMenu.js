import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function HeaderMenu(props) {
  const [active, setActive] = React.useState(0);
  function handleClick(index) {
    setActive(index);
  }
  
  return(
    <>
      <nav className={`header__menu ${props.isOpen ? 'menu_opened' : ''}`}>
        <ul className={`menu`}>
        <li onClick={props.handleClick} className="menu__item menu__item_close"/>
          
          {props.links.map((link, index) => 
            <li key={index} className="menu__item">
              <Link href={link.path} 
                    className={`menu__link ${index===active ? 'menu__link_active' : ''}`} 
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
    </>
  );
}

export default HeaderMenu;