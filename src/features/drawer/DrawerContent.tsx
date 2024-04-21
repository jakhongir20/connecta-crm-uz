import DetailBox from './DrawerDetail';

function DrawerContent() {
  return (
    <div className="drawer-content">
      <div className="drawer-content__container">
        <div className="drawer-content__left">
          <DetailBox />
        </div>
        <div className="drawer-content__right">Map, Tabs, History, etc</div>
      </div>
    </div>
  );
}

export default DrawerContent;
