import React from "react";
import { links } from "../data/dummy";
import { NavLink } from "react-router-dom";
const BottomNavigation = () => {
  return (
    <div className="fixed -bottom-0 w-screen overflow-hidden pb-1 shadow-xl border h-10 bg-white text-black flex flex-row z-50">
      {links.map((item, index) => (
        <NavLink
          to={`${item.path}`}
          key={index}
          className=" w-full flex flex-row justify-center items-center"
        >
          <span className="h-7 w-7 text-black">{item.icon}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default BottomNavigation;
