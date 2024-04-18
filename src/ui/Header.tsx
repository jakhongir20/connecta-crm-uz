function Header() {
  return (
    <div className="header">
      <div className="header__menu menu">
        <ul className="menu__list">
          <li><a href="/" className="menu__link">Quotes</a></li>
          <li><a href="/" className="menu__link _active"> Follow up</a></li>
          <li><a href="/" className="menu__link">Warm</a></li>
          <li><a href="/" className="menu__link">Ongoing</a></li>
          <li><a href="/" className="menu__link">Upcoming</a></li>
          <li><a href="/" className="menu__link"> On hold</a></li>
          <li><a href="/" className="menu__link">Not now</a></li>
          <li><a href="/" className="menu__link">Archived</a></li>
        </ul>
      </div>
      <div className="header__actions">
        <div className="header__search">
          <input type="text" placeholder="Search" className="input-search-big" />
        </div>
        <div className="header__add cursor-pointer">
          <img src="./img/plus_circle.svg" alt="" />
        </div>
        <div className="header__lightblub">
          <img src="./img/lightbulb.svg" alt="" />
        </div>
        <div className="header__avatar">
          <img src="./img/main_user_img.svg" alt="" />
        </div>
      </div>
    </div>

  );
}

export default Header;
