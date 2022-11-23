import React from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";
const UploadFile = ({ isOpen, handleClickOutSide }) => {
  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } flex-col items-center justify-center
   bg-slate-900 bg-opacity-60 absolute h-screen w-screen top-0 left-0`}
      onClick={() => {
        handleClickOutSide();
      }}
      style={{ zIndex: "1000" }}
    >
      <div className="modal relative bg-white w-96 h-96 rounded-lg flex flex-col items-center">
        <div className=" p-2 border-b-2 w-full text-center ">
          <h4>Create new post</h4>
        </div>
        <div className="w-full flex flex-col  items-center justify-around h-full pb-2">
          <div className="relative text-center flex flex-col items-center">
            <PhotoIcon className="h-14 w-14" />
            <h4>Drag photo and vidoes here</h4>
          </div>
          <button className="bg-sky-500 font-semibold tracking-tight text-sm text-white p-1 rounded-sm outline-none ">
            Select From Computer
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
