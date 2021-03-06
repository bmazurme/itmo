import HeaderMenu from "./HeaderMenu";
import logoItmo from "../images/logoItmo.svg";

function Header() {
  return (
    <div className="header__background">
      <div className="header">
        <img className="logo__image" src={logoItmo} alt="Логотип" />
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;