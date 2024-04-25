import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { useState } from 'react';
import FeatPerson from './feature/FeatPerson';
import FeatVehicleInner from './feature/FeatVehicleInner';

function DrawerPerson() {
  const [openPanels, setOpenPanels] = useState<string[]>([]);

  const onChange = (key: string | string[]) => {
    const keyString = Array.isArray(key) ? key[0] : key;
    setOpenPanels(
      openPanels.includes(keyString)
        ? openPanels.filter((item) => item !== keyString)
        : [...openPanels, keyString],
    );
  };

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: (
        <FeatPerson
          keyValue={'1'}
          openPanels={openPanels}
          onChange={onChange}
        />
      ),
      children: (
        <div className="detail-inner">
          <div className="detail-inner__form">
            <FeatVehicleInner />
          </div>
        </div>
      ),
      showArrow: false,
    },
  ];

  return (
    <div className="box-header-inner">
      <Collapse
        activeKey={openPanels}
        ghost
        collapsible="icon"
        onChange={onChange}
        items={items}
      />
    </div>
  );
}

export default DrawerPerson;
