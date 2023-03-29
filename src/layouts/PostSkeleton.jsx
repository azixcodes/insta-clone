import React from "react";

const PostSkeleton = () => {
  const divs = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {divs.map((_, index) => (
        <div
          className="w-[400px] bg-gray-300 rounded-md flex  flex-col animate-pulse h-96 my-2 gap-2"
          key={index}
        >
          <div className="flex w-full px-2 items-center gap-1 mt-2">
            <div className="h-7 w-7 rounded-full bg-gray-400 animate-pulse"></div>
            <div>
              <div className="h-0.5 w-20 bg-gray-400 animate-pulse"></div>
              <div className="h-[2px] w-20 bg-gray-400 animate-pulse"></div>
            </div>
          </div>
          <div className="w-full h-80 rounded-md bg-gray-300 animate-pulse px-2 "></div>
        </div>
      ))}
    </>
  );
};

export default PostSkeleton;
