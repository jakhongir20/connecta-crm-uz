function TableHeaderLeft({pageName}:{pageName:string}) {
  return (
    <div className="dt-header__left">
      <div className="dt-header__tableicon cursor-pointer">
        <img src="./img/dt_table/table_sells.svg" alt="" />
      </div>
      <div className="dt-header__calendaricon cursor-pointer">
        <img src="./img/dt_table/calendar.svg" alt="" />
      </div>
      <button type="button" className="dt-header__add-btn btn--primary">
        <img src="./img/plus_w.svg" alt="" />
        <span>New {pageName}</span>
      </button>
    </div>
  );
}

export default TableHeaderLeft;
