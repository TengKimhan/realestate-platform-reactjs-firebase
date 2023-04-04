import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const inactiveMenu =
    "cursor-pointer py-3 text-sm font-bold text-gray-400 border-b-[3px] border-b-transparent";
  const activeMenu =
    "cursor-pointer py-3 text-sm font-bold border-b-[3px] text-black border-b-red-500";

  function matchPath(path) {
    if (path === location.pathname) {
      return true;
    }
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={matchPath("/") ? activeMenu : inactiveMenu}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={matchPath("/offers") ? activeMenu : inactiveMenu}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={matchPath("/sign-in") ? activeMenu : inactiveMenu}
              onClick={() => navigate("/sign-in")}
            >
              Sign In
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
