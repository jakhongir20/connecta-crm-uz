import { NavLink } from 'react-router-dom';
import logo from '../../public/img/logo.svg';
import { getMenuData } from '../services/menu';
function Sidebar() {
  const user = {
    roles: ['admin', 'user'],
  };

  if (!user) {
    return null;
  }

  const filteredMenu = getMenuData.filter((item) => {
    return item.roles.some((role) => user?.roles?.includes(role));
  });

  return (
    <div className="sidebar">
      <nav className="nav">
        <ul className="nav__list">
          <li>
            <a className="nav__link" href="/">
              <img src={logo} alt="Logo" />
            </a>
          </li>
          {filteredMenu.map(({ key, path, icon, iconActive }) => {
            return (
              <li key={key}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? 'nav__link _active' : 'nav__link '
                  }
                >
                  {/* {({ isActive }) => <img src={`./img/sidebar/${isActive ? iconActive : icon}.svg`} alt={isActive ? iconActive : icon} */}
                  {({ isActive }) => (
                    <img
                      src={isActive ? iconActive : icon}
                      alt={isActive ? iconActive : icon}
                    />
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;

{
  /* <li>
<a className="nav__link" href="/"
><img src="./img/sidebar/02.svg" alt=""
  /></a>
</li>
<li>
<a className="nav__link" href="/"
><img src="./img/sidebar/03.svg" alt=""
  /></a>
</li>
<li>
<a className="nav__link" href="/"
><img src="./img/sidebar/04.svg" alt=""
  /></a>
</li>
<li>
<a className="nav__link" href="/"
><img src="./img/sidebar/05.svg" alt=""
  /></a>
</li>
<li>
<a className="nav__link" href="/"
><img src="./img/sidebar/06.svg" alt=""
  /></a>
</li>
<li>
<a className="nav__link" href="/"
><img src="./img/sidebar/07.svg" alt=""
  /></a>
</li>
<li>
<a className="nav__link" href="/"
><img src="./img/sidebar/08.svg" alt=""
  /></a>
</li>
<li>
<a className="nav__link" href="/"
><img src="./img/sidebar/09.svg" alt=""
  /></a>
</li>
<li>
<a className="nav__link" href="/"
><img src="./img/sidebar/10.svg" alt=""
  /></a>
</li> */
}
