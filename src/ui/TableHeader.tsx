
function TableHeader() {
  return (
    <div className="dt-header">
      <div className="dt-header__left">
        <div className="dt-header__tableicon">
          <img src="./img/dt_table/table_sells.svg" alt="" />
        </div>
        <div className="dt-header__calendaricon">
          <img src="./img/dt_table/calendar.svg" alt="" />
        </div>
        <button type="button" className="dt-header__add-btn btn--primary">
          <img src="./img/plus_w.svg" alt="" />
          <span>New lead</span>
        </button>
      </div>
      <div className="dt-header__right">
        <div className="dt-header__allsources dt-header-select">
          <button><img src="./img/dt_table/ellipse.svg" alt="" /></button>
          <select className="dt-header__allsources_select dt-header-select">
            <option selected value="0">All sources</option>
            <option value="0">1 All sources</option>
            <option value="0">2 All sources</option>
            <option value="0">3All sources</option>
          </select>
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
          <input type="text" className="input-search-small" placeholder="Search" />
        </div>
        <div className="dt-header__users">
          <button>
            <img src="./img/dt_table/default_user_image.png" alt="" />
          </button>
          <select className="dt-header__users dt-header-select">
            <option selected value="0">Ali Brian (me)</option>
            <option value="0">1 Ali Brian (me)</option>
            <option value="0">2 All sources</option>
            <option value="0">3All sources</option>
          </select>
        </div>
        <div className="dt-header__hamburg">
          <img src="./img/dt_table/hamburg_menu.svg" alt="" />
        </div>
      </div>
    </div>

  );
}

export default TableHeader;
