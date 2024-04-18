import TableSelect from './TableSelect';

function TableHeaderRight() {
  const discountOptions = [
    { value: 'all', label: 'All' },
    { value: 'no-discount', label: 'No discount' },
    { value: 'with-discount', label: 'With discount' },
  ];

  const userOptions = [
    { value: 'all', label: 'All' },
    { value: 'user-1', label: 'User 1' },
    { value: 'user-2', label: 'User 2' },
  ];

  return (
    <div className="dt-header__right">
      <div className="dt-header__allsources dt-header-select">
        <img
          className="dt-header-select_icon"
          src="./img/dt_table/ellipse.svg"
          alt=""
        />
        <TableSelect selectField="discount" options={discountOptions} />
      </div>
      <div className="dt-header__showlist">
        <p className="dt-header__showlist_price">$120,000</p>
        <div className="dt-header__dot"></div>
        <div className="dt-header__showlist_gutter">
          <p className="dt-header__showlist_perpage">1/50</p>
          <p className="dt-header__showlist_allcounts">2500</p>
        </div>
      </div>
      <div className="dt-header__showlist_open">
        <img src="./img/dt_table/not_full_view.svg" alt="" />
      </div>
      <div className="dt-header__search">
        <input
          type="text"
          className="input-search-small"
          placeholder="Search"
        />
      </div>
      <div className="dt-header__users dt-header-select">
        <img
          className="dt-header-select_icon"
          src="./img/dt_table/ellipse.svg"
          alt=""
        />
        <img
          className="dt-header-select_avater"
          src="./img/dt_table/default_user_image.png"
          alt=""
        />
        <TableSelect selectField="users" options={userOptions} />
      </div>
      <div className="dt-header__hamburg">
        <img src="./img/dt_table/hamburg_menu.svg" alt="" />
      </div>
    </div>
  );
}

export default TableHeaderRight;
