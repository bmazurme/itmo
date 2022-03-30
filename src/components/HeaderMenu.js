function HeaderMenu() {
  return(
    <nav className="nav__header">
      <ul className="nav__lists">
        <li className="nav__list-size"><a className="nav__list nav__list-active" href="">О нас</a></li>
        <li className="nav__list-size"><a className="nav__list" href="">Лаборатория</a></li>
        <li className="nav__list-size"><a className="nav__list" href="">Проекты</a></li>
        <li className="nav__list-size"><a className="nav__list" href="">Образование</a></li>
        <li className="nav__list-size"><a className="nav__list" href="">Публикации</a></li>
        <li className="nav__list-size"><a className="nav__list" href="">Команда</a></li>
        <li className="nav__list-size"><a className="nav__list" href="">Связаться</a></li>
      </ul>
    </nav>
  );
}

export default HeaderMenu;