import React from "react";
import { XMarkIcon, HeartIcon } from "@heroicons/react/24/outline";
// import { useStateContext } from "../contexts/ContextApi";
const PostModal = ({ postModalOpen, setpostModalOpen, post }) => {
  //   const { post } = useStateContext();
  console.log(post);
  return (
    <div
      className={`h-full w-screen fixed bg-gray-500 bg-opacity-60 top-0 left-0 ${
        postModalOpen ? "flex" : "hidden"
      }
     items-center justify-center z-50`}
    >
      <XMarkIcon
        className="absolute right-5 top-1 h-5 w-5 hover:scale-125 ease-in-out duration-100 cursor-pointer"
        title="close"
        onClick={() => {
          setpostModalOpen(!postModalOpen);
        }}
      />
      <div className="h-[32rem] w-[70%] bg-white flex flex-row">
        <div className="post w-1/2 border">
          <img
            src={post.userPost}
            alt="post"
            className="h-auto max-h-full w-full max-w-3xl"
          />
        </div>
        <div className="w-1/2 flex flex-col  p-2 mx-2">
          <div className="flex flex-col w-full border p-2">
            <div className="user flex flex-row gap-2 items-center">
              <img
                src={post.profile}
                className="h-7 w-7 rounded-full"
                alt="avatar"
              />
              <p className="text-sm text-gray-400 font-semibold whitespace-nowrap text-ellipsis">
                {post.username.toString().replace(" ", "")}
              </p>
            </div>
            <p className="ml-8 text-sm text-slate-700">{post.caption}</p>
          </div>
          <div className="comments flex flex-col h-full pb-2 overflow-y-auto max-h-full scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-500">
            {post.comments.map((user, index) => (
              <div className="flex flex-row gap-2 items-center" key={index}>
                <img
                  src={user.image}
                  className="h-10 w-10 rounded-full  p-1 border border-white shadow-sm"
                  alt="avatar"
                />
                <div className="w-full flex flex-col ">
                  <p className="text-xs text-slate-800 group cursor-pointer flex-1">
                    {user.comment}
                  </p>
                  <div className=" flex flex-row justify-between">
                    <span className="text-xs text-gray-500">
                      {user.timeStamp}
                    </span>
                    <span className="text-xs">...</span>
                    <span className="text-xs text-gray-500 cursor-pointer">
                      reply
                    </span>
                    <HeartIcon className="h-3 w-3 cursor-pointer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
