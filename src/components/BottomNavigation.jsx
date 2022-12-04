import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
  HeartIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import { AiOutlineCompass } from "react-icons/ai";
const BottomNavigation = () => {
  const links = [
    {
      label: "Home",
      path: "/",
      icon: <HomeIcon />,
    },
    {
      label: "Search",
      path: "/search",
      icon: <MagnifyingGlassIcon />,
    },
    {
      label: "Messages",
      path: "/messages",
      icon: <PaperAirplaneIcon style={{ transform: "rotate(-45deg)" }} />,
    },
    {
      label: "Explore",
      path: "/explore",
      icon: <AiOutlineCompass style={{ height: "34px", width: "34px" }} />,
    },
    {
      label: "Notifications",
      path: "/notifications",
      icon: <HeartIcon />,
    },
  ];
  return (
    <div className="fixed -bottom-0 w-screen overflow-hidden pb-1 shadow-xl border h-12 bg-white text-black flex flex-row z-50">
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
