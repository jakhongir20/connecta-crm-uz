import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import DetailBox from './DrawerDetail';
import { DrawerContentHead, IconArrow } from './DrawerFeatures';
import Map from './map/Map';
import Tabs from './tabs/Tabs.tsx';

function DrawerContent() {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <DrawerContentHead label="Map" />,
      children: <Map />,
    },
    {
      key: '2',
      label: <DrawerContentHead label="Task" />,
      children: <p>task</p>,
    },
    {
      key: '3',
      label: <DrawerContentHead label="History" />,
      children: <p></p>,
    },
  ];

  return (
    <div className="drawer-content d-flex">
      {/* <div className="drawer-content__container "> */}
      <div className="drawer-content__left">
        <DetailBox />
      </div>
      <div className="drawer-content__right p-20">
        <Tabs />
        <br />
        <Collapse
          defaultActiveKey={['2']}
          ghost
          collapsible="header"
          expandIcon={IconArrow}
          items={items}
        />
      </div>
    </div>
  );
}

export default DrawerContent;
