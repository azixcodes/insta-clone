import React from "react";
import { stories } from "../data/dummy";

const Stories = () => {
  return (
    <div
      className="border max-w-3xl w-96 h-32 scrollbar-track-slate-100 scrollbar-thin 
     overflow-x-auto flex flex-row gap-5  items-center mt-3 rounded-md  bg-white"
    >
      <div className="flex mx-3 gap-3">
        {stories.map((item, index) => (
          <div className="flex flex-col text-center items-center" key={index}>
            <img
              src={item.image}
              className="h-16 w-16 rounded-full border-2 border-yellow-400"
              alt="avatar"
            />
            <p className="w-16 whitespace-nowrap text-xs text-ellipsis overflow-hidden">
              {item.username}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
