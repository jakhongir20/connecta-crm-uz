import { classNames } from '../../utils/helpers';

export const IconArrow = () => (
  <img className="arrow-icon" src="./img/drawer/down-arrow.svg" alt="" />
);

type IconArrowBoldProps = {
  keyValue: string;
  openPanels: string[];
};
export const IconArrowBold = ({ keyValue, openPanels }: IconArrowBoldProps) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={classNames(
        openPanels?.includes(keyValue) ? '_active -ml-25' : '',
        'box-header__arrow-bold cursor-inherit',
      )}
    >
      <img src="./img/drawer/down-arrow-bold.svg" alt="" />
    </div>
  );
};

export const DetailHeaderInfo = ({
  label,
  icon,
}: {
  label: string;
  icon: string;
}) => {
  return (
    <div className="detail__left d-flex align-center">
      <div className="detail__icon d-flex">
        <img src={`./img/drawer/${icon}.svg`} alt="" />
      </div>
      <div className="detail__label ml-10">{label}</div>
    </div>
  );
};
