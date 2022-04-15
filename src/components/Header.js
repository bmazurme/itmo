import React from "react";
import HeaderMenu from "./HeaderMenu";
import logoItmo from "../images/logoItmo.svg";
import { links } from "../data/header";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="header">
      <div className="header__container">
        <button onClick={handleClick}
                className="header__button" 
                type="text"/>
        <img className="logo" src={logoItmo} alt="Логотип" />
        <HeaderMenu handleClick={handleClick} 
                    isOpen={isOpen} 
                    links={links}/>
      </div>
    </div>
  );
}

export default Header;