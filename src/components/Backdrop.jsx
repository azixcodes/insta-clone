import React, { useState } from "react";

const Backdrop = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div>
      <button
        className="bg-sky-500 outline-none focus:ring-4 text-white p-2 rounded-lg"
        onClick={() => {
          setisOpen(!isOpen);
        }}
      >
        Toogle Modal
      </button>
      <div
        className={`backdrop h-screen w-screen bg-gray-400 bg-opacity-50 z-50 fixed top-0 left-0 ${
          isOpen ? "flex" : "hidden"
        } flex-row 
      justify-center items-center`}
      >
        <div className="h-96 w-96 bg-white rounded-lg">
          <h2>This is Your Modal</h2>
          <button
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            CLose
          </button>
        </div>
      </div>
    </div>
  );
};

export default Backdrop;
