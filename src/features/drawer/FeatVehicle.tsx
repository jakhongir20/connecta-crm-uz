import DetailInnerHeaderDefault from './DetailInnerHeaderDefault';
import DetailInnerHeaderOpen from './DetailInnerHeaderOpen';
import { DetailHeaderInfo, IconArrowBold } from './DrawerFeatures';

type FeatVehicleProps = {
  keyValue: string;
  openPanels: string[];
  onChange: (val: string) => void;
};

function FeatVehicle({ keyValue, openPanels, onChange }: FeatVehicleProps) {
  return (
    <div className="detail detail-vehicle">
      <div className="detail__header d-flex align-center justify-between">
        <DetailHeaderInfo label="Vehicle" icon="car" />
        {openPanels?.includes(keyValue) ? (
          <DetailInnerHeaderOpen
            keyValue={keyValue}
            hasAddAction={true}
            onChange={onChange}
          />
        ) : (
          <DetailInnerHeaderDefault
            keyValue={keyValue}
            data={{ label: '2022 Toyota Camry' }}
            onChange={onChange}
          />
        )}
        <IconArrowBold keyValue={keyValue} openPanels={openPanels} />
      </div>
    </div>
  );
}

export default FeatVehicle;
