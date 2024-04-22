import DetailBox from './DrawerDetail';
import Tabs from './tabs/Tabs';

function DrawerContent() {
  return (
    <div className="drawer-content d-flex">
      {/* <div className="drawer-content__container "> */}
      <div className="drawer-content__left">
        <DetailBox />
      </div>
      <div className="drawer-content__right p-20">
        <Tabs />
      </div>
      {/* </div> */}
    </div>
  );
}

export default DrawerContent;
