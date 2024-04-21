import DetailInnerHeaderDefault from './DetailInnerHeaderDefault';
import DetailInnerHeaderOpen from './DetailInnerHeaderOpen';
import { DetailHeaderInfo, IconArrowBold } from './DrawerFeatures';

type FeatConditionProps = {
  keyValue: string;
  openPanels: string[];
  onChange: (val: string) => void;
};

function FeatCondition({ keyValue, openPanels, onChange }: FeatConditionProps) {
  return (
    <div className="detail detail-condition">
      <div className="detail__header d-flex align-center justify-between">
        <DetailHeaderInfo label="Condition" icon="dvigatel" />
        {openPanels?.includes(keyValue) ? (
          <DetailInnerHeaderOpen
            keyValue={keyValue}
            hasAddAction={false}
            onChange={onChange}
          />
        ) : (
          <DetailInnerHeaderDefault
            keyValue={keyValue}
            textWithBg={true}
            data={{ label: 'Runs and drives' }}
            onChange={onChange}
          />
        )}
        <IconArrowBold keyValue={keyValue} openPanels={openPanels} />
      </div>
    </div>
  );
}

export default FeatCondition;
