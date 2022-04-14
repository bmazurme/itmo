import HeaderMenu from "./HeaderMenu";
import logoItmo from "../images/logoItmo.svg";
import { links } from "../data/header";

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        
      <button className="header__button" type="text"></button>

        <img className="logo" src={logoItmo} alt="Логотип" />

        <HeaderMenu links={links}/>

      </div>
    </div>
  );
}

export default Header;