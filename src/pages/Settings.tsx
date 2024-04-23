import { Outlet, } from "react-router-dom";
import SettingSidebar from "../ui/SettingSidebar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Settings() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/setting/users")
  }, [])
  return (
    <div className="setting">
      <SettingSidebar />
      <div className="setting__content">
        <Outlet />
      </div>
    </div>
  );
}

export default Settings;
