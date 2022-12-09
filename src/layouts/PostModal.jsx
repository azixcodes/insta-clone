import React, { useState } from "react";
import {
  XMarkIcon,
  HeartIcon,
  PaperAirplaneIcon,
  ChatBubbleOvalLeftIcon,
  BookmarkIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";

// import { useStateContext } from "../contexts/ContextApi";
const PostModal = ({ postModalOpen, setpostModalOpen, post }) => {
  const [hasText, sethasText] = useState(true);
  const handleTextChange = (e) => {
    if (e.length <= 0) {
      sethasText(true);
    } else sethasText(false);
  };

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
      <div className="h-[32rem] w-screen md:w-[70%] bg-white flex flex-col md:flex-row">
        <div className="post w-full md:w-1/2 border bg-black flex flex-col items-center justify-center">
          <img
            src={post.post}
            alt="post"
            className="h-auto max-h-full w-full max-w-3xl py-5"
          />
        </div>
        <div className="md:w-1/2 w-full flex flex-col ">
          <div className="flex flex-col w-full border px-2 p-2">
            <div className="user flex flex-row gap-2 items-center">
              <img
                src={post.avatar}
                className="h-7 w-7 rounded-full"
                alt="avatar"
              />
              <p className="text-xs text-slate-700 font-semibold whitespace-nowrap text-ellipsis">
                {post.username}
              </p>
            </div>
            <p className="ml-8 text-xs text-slate-700 ">{post.caption}</p>
          </div>
          <div className="comments flex flex-col h-full pb-2 overflow-y-auto max-h-full scrollbar-thin ">
            {post.comments.map((user, index) => (
              <div
                className="flex flex-row gap-2 items-center px-2 mt-2"
                key={index}
              >
                <img
                  src={user.image}
                  className="h-10 w-10 rounded-full  p-1 border border-white shadow-sm"
                  alt="avatar"
                />
                <div className="w-full flex flex-col ">
                  <p className="text-xs text-slate-800 group cursor-pointer flex-1 whitespace-nowrap overflow-hidden text-ellipsis w-80">
                    {user.comment}
                  </p>
                  <div className=" flex flex-row justify-start gap-10">
                    <span className="text-xs text-gray-500">
                      {user.timeStamp}
                    </span>
                    <span className="text-xs">...</span>
                    <span className="text-xs text-gray-500 cursor-pointer">
                      reply
                    </span>
                  </div>
                </div>
                <HeartIcon className="h-3 w-3 cursor-pointer" />
              </div>
            ))}
          </div>
          <div className="h-48 w-full flex flex-col border gap-2 justify-between">
            <div className="header w-full flex flex-row justify-between px-2 mt-2">
              <div className="flex flex-row gap-3">
                <HeartIcon className="h-5 w-5 hover:text-gray-400 cursor-pointer" />
                <ChatBubbleOvalLeftIcon className="h-5 w-5 hover:text-gray-400 cursor-pointer" />
                <PaperAirplaneIcon className="h-5 w-5 hover:text-gray-400 cursor-pointer -rotate-45" />
              </div>
              <BookmarkIcon className="h-5 w-5 hover:text-gray-400 cursor-pointer" />
            </div>
            <div className="px-2">
              <p className="text-xs font-semibold tracking-normal ">
                {post.likes} likes
              </p>
              <p className="text-xs text-gray-500">{post.time}</p>
            </div>
            <div className="comment-box w-full border px-2 flex flex-row items-center h-10 justify-between">
              <div className="flex flex-row gap-2">
                <FaceSmileIcon className="cursor-pointer h-5 w-5 hover:bg-slate-100" />
                <input
                  type="text"
                  placeholder="Add a comment"
                  className="outline-none bg-transparent text-xs"
                  onChange={(e) => {
                    handleTextChange(e.target.value);
                  }}
                />
              </div>
              <button
                className={`text-sky-500 text-xs font-medium ${
                  hasText && "cursor-not-allowed"
                }`}
                disabled={hasText}
              >
                post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
