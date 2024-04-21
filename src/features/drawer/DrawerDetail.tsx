import type { CollapseProps } from 'antd';
import { Button, Collapse } from 'antd';
import DetailInner from './DrawerDetailInner';
import { IconArrow } from './DrawerFeatures';
function Detail() {
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

  type BoxHeaderType = {
    label: string;
    value: string;
  };

  const BoxHeader = ({ label, value }: BoxHeaderType) => {
    const detailContent = (
      <>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            console.log('CD Price');
          }}
          type="primary"
          size="small"
          danger
        >
          CD Price
        </Button>
        <div className="box-header__edit ml-10">
          <img src="./img/drawer/pen.svg" alt="" />
        </div>
      </>
    );
    const personContent = (
      <>
        <div className="box-header__edit ml-10">
          <img src="./img/drawer/pen.svg" alt="" />
        </div>
        <div className="box-header__more ml-10">
          <img src="./img/drawer/more-2.svg" alt="" />
        </div>
      </>
    );

    return (
      <div className="box-header d-flex align-center justify-between">
        <span className="box-header__label">{label}</span>
        <div className="d-flex align-center">
          {value === 'detail' ? detailContent : personContent}
        </div>
      </div>
    );
  };

  const detailContentInner = <DetailInner />;

  const items: CollapseProps['items'] = [
    {
      key: 1,
      label: <BoxHeader label="Details" value="detail" />,
      children: detailContentInner,
    },
    {
      key: 2,
      label: <BoxHeader label="Person" value="person" />,
      children: <p>{text}</p>,
    },
  ];

  function handleCollapse(key: number) {
    const isOpen = items?.map((item) => item.key).includes(key);
    console.log(
      isOpen,
      items?.map((item) => item.key),
      key,
    );
  }

  return (
    <Collapse
      onChange={(key) => handleCollapse(Number(key))}
      ghost
      expandIcon={IconArrow}
      items={items}
    />
  );
}

export default Detail;
