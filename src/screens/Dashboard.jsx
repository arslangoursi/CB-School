import { Outlet } from "react-router-dom";
import Sidebar from "@components/Sidebar";

export default function Dashboard() {
  return (
    <div className="container">
      <Sidebar />
      <div className="container__main">
        <Outlet />
      </div>
    </div>
  );
}
