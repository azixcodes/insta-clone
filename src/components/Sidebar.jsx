import React, { useRef, useEffect } from "react";
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
    "flex flex-row w-11/12 h-10 bg-white hover:bg-slate-100 cursor-pointer items-center rounded-lg p-0 gap-3 group font-semibold sm:justify-center md:justify-start";
  const NormalLink =
    "flex flex-row w-11/12 h-10 bg-white hover:bg-slate-100 cursor-pointer items-center rounded-lg p-0 gap-3 group sm:justify-center md:justify-start";
  return (
    <div className="fixed min-h-screen h-screen hidden md:w-20 lg:w-56 border md:flex flex-col md:items-center lg:items-start">
      Sidebar
    </div>
  );
};

export default Sidebar;
