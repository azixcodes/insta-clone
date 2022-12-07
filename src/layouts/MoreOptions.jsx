import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { minibar } from "../data/dummy";

const MoreOptions = () => {
  return (
    <div className="flex flex-col items-center h-[250px] w-52 rounded-sm  bg-white  shadow-xl border">
      {/* <div className="absolute h-4 w-4 -bottom-2 bg-white left-6 rotate-45"></div> */}
      <div className="flex flex-col w-full gap-2">
        {minibar.map((item, index) => (
          <div
            className="flex flex-row gap-2 items-center justify-start p-1  pl-1 cursor-pointer hover:bg-gray-200 rounded-sm"
            key={index}
          >
            <span className="minibar-icons">{item.icon}</span>
            {item.label === "Saved" ? (
              <NavLink to="/saved">{item.label}</NavLink>
            ) : (
              <p>{item.label}</p>
            )}
          </div>
        ))}
        <div className="h-[5px] w-full bg-gray-100"></div>
        <div className="p-1  pl-2 cursor-pointer hover:bg-gray-200 rounded-sm">
          Switch Accounts
        </div>
        <div className="p-1  pl-2 cursor-pointer hover:bg-gray-200 rounded-sm">
          Log out
        </div>
      </div>
    </div>
  );
};

export default MoreOptions;
