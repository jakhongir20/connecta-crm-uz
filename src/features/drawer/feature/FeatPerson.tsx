import { DrawerPersonInnerInfo } from '../DrawerFeatures';

type FeatPersonProps = {
  keyValue: string;
  openPanels: string[];
  onChange: (val: string) => void;
};

function FeatPerson({ keyValue, openPanels, onChange }: FeatPersonProps) {
  console.log(keyValue, openPanels, onChange);
  return (
    <div className="detail detail-vehicle">
      <DrawerPersonInnerInfo label="User" icon="user" value="John Smith" />
      <DrawerPersonInnerInfo label="Email" icon="mail" value="johm@gmail.com" />
      <DrawerPersonInnerInfo label="Phone" icon="phone" value="+998943445532" />
    </div>
  );
}

export default FeatPerson;
