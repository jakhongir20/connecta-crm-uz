import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { MenuData, getMenuData } from '../services/menu';
import { classNames } from '../utils/helpers';

type Breadcrumb = {
  title: string;
  path: string;
};

function Header() {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const isActive = searchParams.get('filterBy') || '';

  const currentPath: MenuData | undefined = getMenuData.find((menu) =>
    pathname.includes(menu.path),
  );
  const [breadcrumbs, setBreadcrumbs] = useState<MenuData[]>([]);

  useEffect(() => {
    type PathElement = MenuData & { elements?: PathElement[] };
    function getPath(
      data: PathElement[],
      path: string,
      parents: PathElement[] = [],
    ): PathElement[] {
      const adjustedPath = path === '/' ? '/leads' : path;

      return data.reduce<PathElement[]>((result, entry) => {
        if (result.length) return result;

        if (entry.path === adjustedPath) {
          return [entry, ...parents];
        }

        if (entry.elements) {
          const nested = getPath(entry.elements, adjustedPath, [
            entry,
            ...parents,
          ]);
          return nested.length > 0 ? nested : result;
        }

        return result;
      }, []);
    }

    const fullBreadcrumb = getPath(getMenuData as PathElement[], pathname);
    setBreadcrumbs(fullBreadcrumb);
  }, [pathname]);

  return (
    <div className="header">
      <div className="header__menu menu">
        <ul className="menu__list">
          {currentPath?.['filterBy'] ? (
            currentPath['filterBy'].map((item) => (
              <li key={item.id}>
                <Link
                  to={`${currentPath.path}?filterBy=${item.value}`}
                  className={classNames(
                    isActive === item.value ? '_active' : '',
                    'menu__link',
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))
          ) : (
            <>
              {breadcrumbs.length &&
                breadcrumbs
                  .map((crumb: Breadcrumb, index) => (
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
