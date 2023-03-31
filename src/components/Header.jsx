import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <p className="btn btn-ghost normal-case text-xl">App</p>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <p>Weather</p>
          </li>
          <li>
            <p>Input Test</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
