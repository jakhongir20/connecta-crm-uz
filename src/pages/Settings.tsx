import { Outlet } from 'react-router-dom';
import SettingsSidebar from '../ui/SettingsSidebar';

function Settings() {
  return (
    <div className="setting">
      <SettingsSidebar />
      <div className="setting__content">
        <Outlet />
      </div>
    </div>
  );
}

export default Settings;
