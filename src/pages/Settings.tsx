import {  Outlet, } from "react-router-dom";
import SettingSidebar from "../ui/SettingSidebar";

function Settings() {
  return (
    <div className="setting">
      <SettingSidebar />
      <div className="setting__content">
      <Outlet/>
      </div>
    </div>
  );
}

export default Settings;
