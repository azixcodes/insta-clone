import React from "react";
import InstaSmall from "../data/insta-text.png";
import InstamLarge from "../data/insta.png";
import { links } from "../data/dummy";
import { NavLink } from "react-router-dom";
import { IoPaperPlaneOutline } from "react-icons/io5";
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

  const activeLink =
    "flex flex-row w-11/12 h-10 bg-white hover:bg-slate-100 cursor-pointer items-center rounded-lg p-3 gap-3 group font-semibold";
  const NormalLink =
    "flex flex-row w-11/12 h-10 bg-white hover:bg-slate-100 cursor-pointer items-center rounded-lg p-3 gap-3 group";
  return (
    <div className="fixed overflow-hidden top-0 w-0 sm:w-20 md:w-56 flex flex-col border max-h-screen h-screen pt-6 pb-6">
      <div className="mx-2 flex">
        <NavLink to="/">
          <img
            src={InstaSmall}
            className="h-10 cursor-pointer hidden md:block"
            alt="logo"
          />
        </NavLink>

        <NavLink to="/">
          <img
            src={InstamLarge}
            className="h-5 cursor-pointer block md:hidden"
            alt="logo"
          />
        </NavLink>
      </div>
      <div className="flex flex-col relative mt-4 gap-4 text-sm ml-2 flex-1">
        {links.map((link, index) => (
          <NavLink
            className={({ isActive }) => (isActive ? activeLink : NormalLink)}
            key={index}
            to={link.path}
          >
            {link.label === "Messages" ? (
              <IoPaperPlaneOutline className="h-5 w-5 rotate-6 group-hover:scale-105 ease-in-out" />
            ) : (
              <span className="h-5 w-5 group-hover:scale-105 ease-in-out font-bold">
                {link.icon}
              </span>
            )}

            <span className="hidden md:block">{link.label}</span>
          </NavLink>
        ))}
        <div
          className="flex flex-row w-11/12 h-10 bg-white hover:bg-slate-100 cursor-pointer items-center rounded-lg p-3 gap-3 group"
          onClick={() => {
            setaddPostModal(!addPostModal);
          }}
        >
          <PlusIcon className="h-5 w-5 border-2 border-slate-600 rounded-md group-hover:scale-105 ease-in-out" />
          <span className="sm:hidden md:block">Create</span>
        </div>
        <NavLink className="flex flex-row w-11/12 h-10 bg-white hover:bg-slate-100 cursor-pointer items-center rounded-lg p-3 gap-3 group">
          <img
            src={User}
            className="h-5 w-5 rounded-full group-hover:scale-105 ease-in-out"
            alt="user"
          />
          <span className="sm:hidden md:block">Profile</span>
        </NavLink>
      </div>
      <div
        className=" flex flex-row w-11/12 h-10 bg-white hover:bg-slate-100 cursor-pointer
       items-center rounded-lg p-3 gap-3 group"
        onClick={() => {
          setmoreOptionsModal(!moreOptionsModal);
        }}
      >
        <Bars3Icon className="h-9 w-6 group-hover:scale-105 ease-in-out" />
        <span
          className={`${
            moreOptionsModal && "font-semibold"
          } sm:hidden md:block`}
        >
          Create
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
