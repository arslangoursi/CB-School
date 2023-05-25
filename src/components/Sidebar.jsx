import { Link, NavLink } from "react-router-dom";

import DashboardIcon from "@assets/DashboardIcon";
import Logo from "@assets/Logo";
import { moduels } from "@constants/moduels";

export default function Sidebar() {
  return (
    <div className="container__sidebar">
      <Link to="/dashboard" className="container__sidebar__logo">
        <Logo />
      </Link>
      <div className="container__sidebar__content">
        {moduels.map((module, index) => (
          <NavLink
            end={index === 0}
            key={module.name}
            to={module.path}
            state={{ name: module.name }}
            className="container__sidebar__content__entry"
          >
            {module.icon}
            <span>{module.name}</span>
          </NavLink>
        ))}
      </div>
      <Link to="/" className="container__sidebar__button">
        <DashboardIcon />
        <span>Logout</span>
      </Link>
    </div>
  );
}
