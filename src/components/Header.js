import HeaderMenu from "./HeaderMenu";
import logoItmo from "../images/logoItmo.svg";
import { links } from "../data/header";

function Header() {
  return (
    <div className="header">

      <div className="header__container">
        <img className="logo__image" src={logoItmo} alt="Логотип" />

        <HeaderMenu links={links}/>

      </div>
    </div>
  );
}

export default Header;