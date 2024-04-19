function DrawerHeader({ isFullScreen, onClose, onFullScreen }) {
  let controls = (
    <>
      <div onClick={onClose} className="control__item control__item_close">
        <img src="./img/drawer/close-x.svg" alt="" />
      </div>
      <div className="control__item control__item_up-arrow">
        <img src="./img/drawer/up-arrow.svg" alt="" />
      </div>
      <div className="control__item control__item_down-arrow">
        <img src="./img/drawer/down-arrow.svg" alt="" />
      </div>
      <div
        onClick={() => onFullScreen(false)}
        className="control__item control__item_size"
      >
        <img src="./img/drawer/resize.svg" alt="" />
      </div>
    </>
  );
  if (!isFullScreen) {
    controls = null;
  }

  return (
    <div className="drawer-header">
      <div className="drawer-header__container">
        <div className="drawer-header__left control">
          {controls}
          <div>#0644458</div>
        </div>
        <div className="drawer-header__right">
          <div className="drawer-header__actions">
            <div className="avatar-dropdown">
              <img
                src="./img/drawer/avatar.png"
                alt="Ali Brian"
                className="avatar"
              />
              {/* <span>Ali Brian</span> */}
              {/* <button className="dropdown-button">▼</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrawerHeader;
