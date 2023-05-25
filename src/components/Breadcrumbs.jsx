import { moduels } from "../constants/moduels";
import { useLocation } from "react-router-dom";

export default function Breadcrumbs({}) {
  const { pathname, state } = useLocation();
  return (
    <div className="breadcrumbs">
      {moduels.find((module) => module.name === state?.name)?.icon}
      {pathname.split("/").map((path, index) => (
        <span key={index}>
          {path}
          {index !== pathname.split("/").length - 1 && index !== 0 && (
            <span className="breadcrumbs__separator">{">"}</span>
          )}
        </span>
      ))}
    </div>
  );
}
