import { Button } from 'antd';
import { useAppSelector } from '../../store/hooks';
import { useEditVehicle } from './useEditVehicle';

type DetailInnerHeaderOpenProps = {
  keyValue: string;
  hasAddAction?: boolean;
  onChange: (val: string) => void;
};

function DetailInnerHeaderOpen({
  keyValue,
  hasAddAction = false,
  onChange,
}: DetailInnerHeaderOpenProps) {
  const formData = useAppSelector((state) => state.vehicle.formData);
  const { editVehicle } = useEditVehicle();

  function handleSaveClick() {
    editVehicle(formData);
    onChange(keyValue);
  }

  return (
    <div className="detail__btns d-flex align-center">
      <Button block size="small">
        Cancel
      </Button>
      <Button
        className="ml-10"
        type="primary"
        size="small"
        onClick={handleSaveClick}
      >
        Save
      </Button>
      {hasAddAction && (
        <div className="d-flex ml-10">
          <div className="box-header__add">
            <img src="./img/plus_bold.svg" alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailInnerHeaderOpen;
