import { ReactNode } from 'react';
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

export const DrawerContentHead = ({
  label,
  children,
}: {
  label: string;
  children?: ReactNode;
}) => {
  return (
    <div className="box-header d-flex align-center justify-between">
      <span className="box-header__label">{label}</span>
      <div className="d-flex align-center">{children}</div>
    </div>
  );
};

export const DrawerPersonInnerInfo = ({
  label,
  icon,
  value,
}: {
  label: string;
  icon: string;
  value: string;
}) => {
  return (
    <div className="detail__header d-flex align-center mb-10">
      <div className="detail__left d-flex align-center min-w-30">
        <div className="detail__icon d-flex">
          <img className="w-20" src={`./img/drawer/${icon}.svg`} alt="" />
        </div>
        <div className="detail__label ml-10">{label}</div>
      </div>
      <p>{value}</p>
      {icon === 'phone' && (
        <div className="box-header__edit ml-10 w-30">
          <img src="./img/drawer/call-more.svg" alt="" />
        </div>
      )}
    </div>
  );
};
