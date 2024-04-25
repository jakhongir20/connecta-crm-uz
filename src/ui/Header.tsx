import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMenuData } from '../services/menu';

function Header() {
  const { pathname } = useLocation();
  const currentPath = getMenuData.find((menu) => pathname.includes(menu.path));
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    function getPath(data, path: string, parents = []) {
      if (path === '/') {
        path = '/leads';
      }
      return data.reduce((result, entry) => {
        if (result.length) {
          return result;
        }

        if (entry.elements) {
          const nested = getPath(entry.elements, path, [entry].concat(parents));
          return (result || []).concat(nested.filter((e) => !!e));
        }

        if (path === entry.path) {
          return [entry].concat(parents);
        }

        return result;
      }, []);
    }

    if (currentPath?.elements) {
      const fullBreadcrumb = getPath(getMenuData, pathname);
      setBreadcrumbs(fullBreadcrumb);
    }
  }, [pathname, currentPath]);

  return (
    <div className="header">
      <div className="header__menu menu">
        <ul className="menu__list">
          {currentPath?.['filterBy'] ? (
            currentPath['filterBy'].map((item) => (
              <li key={item.id}>
                <Link
                  to={`${currentPath.path}?filterBy=${item.value}`}
                  className="menu__link"
                >
                  {item.title}
                </Link>
              </li>
            ))
          ) : (
            <>
              {breadcrumbs.length &&
                breadcrumbs
                  .map((crumb, index) => (
                    <li
                      key={index}
                      className={`menu__item_breadcrumb menu__item_breadcrumb_${index + 1}`}
                    >
                      <a className="menu__link">{crumb.title}</a>
                    </li>
                  ))
                  .reverse()}
            </>
          )}
        </ul>
      </div>
      <div className="header__actions">
        <div className="header__search">
          <input
            type="text"
            placeholder="Search"
            className="input-search-big"
          />
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
