import React from "react";
import Backdrop from "@mui/material/Backdrop";
import { quicklinks } from "../data/dummy";
const DotMenus = ({ modalOpen, handleClose }) => {
  return (
    <Backdrop open={modalOpen} onClick={() => handleClose()}>
      <div
        className="flex flex-col items-center justify-center
        shadow-md border w-72 gap-2 rounded-md p-1 divide-y bg-white"
      >
        {quicklinks.map((link, index) => (
          <div
            key={index}
            className="h-7 w-full flex flex-col items-center justify-center "
          >
            <label
              className={
                index === 0 || index === 1
                  ? "text-red-500 cursor-pointer text-sm"
                  : "text-black cursor-pointer text-sm"
              }
            >
              {link}
            </label>
          </div>
        ))}
      </div>
    </Backdrop>
  );
};

export default DotMenus;
