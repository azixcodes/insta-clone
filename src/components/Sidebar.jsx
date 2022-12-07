import React, { useRef, useEffect } from "react";
import InstaSmall from "../data/insta-text.png";
import InstamLarge from "../data/insta-logo.png";
import { links } from "../data/dummy";
import { NavLink } from "react-router-dom";
import { IoPaperPlaneOutline, IoTerminal } from "react-icons/io5";
import { PlusIcon, Bars3Icon } from "@heroicons/react/24/outline";
import User from "../data/user.jpeg";

import { useStateContext } from "../contexts/ContextApi";
const Sidebar = () => {
  const {
    addPostModal,
    setaddPostModal,
    moreOptionsModal,
    setmoreOptionsModal,
  } = useStateContext();
  const moreOptionsRef = useRef();
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!moreOptionsRef.current.contains(e.target)) {
        // setmoreOptionsModal(false);
        setmoreOptionsModal(false);
      }
    });
  });
  const activeLink =
    "flex flex-row w-11/12 h-10 bg-white hover:bg-slate-100 cursor-pointer items-center rounded-lg p-0 gap-2 group font-semibold md:justify-center lg:justify-start";
  const NormalLink =
    "flex flex-row w-11/12 h-10 bg-white hover:bg-slate-100 cursor-pointer items-center rounded-lg p-0 gap-2 group md:justify-center lg:justify-start";
  return (
    <div
      className="fixed min-h-screen h-screen hidden md:w-20 lg:w-48 border md:flex flex-col
     md:items-center lg:items-start pt-4"
    >
      <div className="logo flex w-full md:justify-center lg:justify-start px-2">
        <NavLink to="/">
          <img
            src={InstaSmall}
            className="h-10 cursor-pointer hidden lg:block"
            alt="logo"
          />
        </NavLink>

        <NavLink to="/">
          <img
            src={InstamLarge}
            className="h-5 cursor-pointer block lg:hidden"
            alt="logo"
          />
        </NavLink>
      </div>
      {/* end of logo section */}
      {/* links goes here.. */}
      <div className="px-2 mt-14 w-full flex flex-col gap-5 flex-1">
        {links.map((link, index) => (
          <NavLink
            key={index}
            className={({ isActive }) => (isActive ? activeLink : NormalLink)}
            to={link.path}
          >
            <span className="h-5 w-5 group-hover:scale-105 ease-in-out font-bold">
              {link.icon}
            </span>
            <label className="hidden lg:block cursor-pointer">
              {link.label}
            </label>
          </NavLink>
        ))}
        <div
          className="flex flex-row w-11/12 h-10 bg-white hover:bg-slate-100 cursor-pointer items-center rounded-lg gap-3 group md:justify-center lg:justify-start"
          onClick={() => {
            setaddPostModal(!addPostModal);
          }}
        >
          <PlusIcon className="h-5 w-5 border-2 border-slate-600 rounded-md group-hover:scale-105 ease-in-out" />
          <span className="md:hidden lg:block">Create</span>
        </div>
        <NavLink
          className={({ isActive }) => (isActive ? activeLink : NormalLink)}
          to="/profile"
        >
          <img
            src={User}
            className="h-5 w-5 group-hover:scale-105 ease-in-out  rounded-full"
          />
          <label className="hidden lg:block cursor-pointer">Profile</label>
        </NavLink>
      </div>
      {/* More options Modal */}
      <div
        className=" flex flex-row w-11/12 h-10 bg-white hover:bg-slate-100 cursor-pointer items-center 
        rounded-lg  gap-3 group md:justify-center lg:justify-start px-2"
        ref={moreOptionsRef}
        onClick={() => {
          setmoreOptionsModal(!moreOptionsModal);
        }}
      >
        <Bars3Icon className="h-9 w-5 group-hover:scale-105 ease-in-out" />
        <span
          className={`${
            moreOptionsModal && "font-semibold"
          } md:hidden lg:block`}
        >
          Create
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
