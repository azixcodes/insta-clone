import React from "react";
import image from "../data/profile2.jpg";
const Test = () => {
  return (
    <>
      <div className="ml-64 group relative w-96">
        <img src={image} atl="hello" />
        <div
          class="absolute top-0 left-0 hidden w-full h-full justify-center items-center
         bg-slate-500 opacity-0 group-hover:block group-hover:opacity-50 duration-500"
        >
          <h4>Hoverd</h4>
        </div>
      </div>
    </>
  );
};

export default Test;
