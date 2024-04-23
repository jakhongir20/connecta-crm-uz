import {  Outlet, } from "react-router-dom";
import SettingSidebar from "../ui/SettingSidebar";
// import Users from "./settingPages/Users";
// import Users from "./settingPages/Users";

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
