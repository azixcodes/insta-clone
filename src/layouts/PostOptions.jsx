import React from "react";
const PostOptions = ({ modalOpen, handleClose }) => {
  return (
    <div
      className={`backdrop h-screen w-screen bg-gray-500 bg-opacity-60 z-50 fixed top-0 left-0 ${
        modalOpen ? "flex" : "hidden"
      } flex-row 
  justify-center items-center`}
      onClick={handleClose}
    >
      <div
        className="flex flex-col text-center
        shadow-md border w-80 gap-4 rounded-md divide-y bg-white pb-3"
      >
        <div className="text-red-500 cursor-pointer text-sm ">Report</div>
        <div className="text-red-500 cursor-pointer text-sm">Unfollow</div>
        <div className="text-black cursor-pointer text-sm">
          Add to favorites
        </div>
        <div className="text-black cursor-pointer text-sm">Go to Post</div>
        <div className="text-black cursor-pointer text-sm">Share</div>
        <div className="text-black cursor-pointer text-sm">Copy link</div>
        <div className="text-black cursor-pointer text-sm">Embed</div>
        <div className="text-black cursor-pointer text-sm">Copy link</div>
        <div
          className="text-black cursor-pointer text-sm"
          onClick={() => {
            handleClose();
          }}
        >
          Cancel
        </div>
      </div>
    </div>
  );
};

export default PostOptions;
