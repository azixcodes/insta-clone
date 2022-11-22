import React from "react";
import { posts } from "../data/dummy";
import {
  PaperAirplaneIcon,
  ChatBubbleOvalLeftIcon,
  HeartIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
const Posts = () => {
  return (
    <div className="max-w-3xl w-96">
      {posts.map((post, index) => (
        <div
          className="relative w-full rounded-md border-2  flex flex-col h-auto max-h-auto mb-3"
          key={index}
        >
          {post.post.map((singlePost, i) => (
            <div className="flex flex-col " key={i}>
              <div className="flex justify-between mx-2 mt-2 pb-2">
                <img
                  src={singlePost.profile}
                  className="h-7 w-7 rounded-full border"
                  alt="avatar"
                />
                <p className="font-bold">...</p>
              </div>
              <img
                src={singlePost.userPost}
                alt="post"
                className="w-full h-full"
              />

              <div className="mx-2 flex flex-row justify-between mt-2">
                <div className="flex gap-3">
                  <HeartIcon className="h-5 w-5 hover:text-gray-400 cursor-pointer" />
                  <ChatBubbleOvalLeftIcon className="h-5 w-5 hover:text-gray-400 cursor-pointer" />
                  <PaperAirplaneIcon className="h-5 w-5 hover:text-gray-400 cursor-pointer -rotate-45" />
                </div>
                <BookmarkIcon className="h-5 w-5 hover:text-gray-400 cursor-pointer " />
              </div>

              <div className="post-description flex flex-col mt-2 mx-2">
                <label className="font-semibold text-sm tracking-tight">
                  {singlePost.likes} Likes
                </label>
                <p className="text-xs text-slate-600">
                  <span className="font-bold text-xs tracking-tighter">
                    {" "}
                    {singlePost.username}
                  </span>
                  &nbsp;
                  {singlePost.caption}
                </p>
              </div>

              <div className="comments max-h-16 overflow-y-auto h-16 mt-2 mx-2">
                <label className="text-xs text-gray-400 font-thin cursor-pointer">
                  view all {singlePost.comments.length} comments
                </label>
                <p className="text-xs font-thin text-gray-400">
                  {singlePost.time}{" "}
                </p>
                {/* {singlePost.comments.map((item, k) => (
                  <div className="flex flex-row items-center gap-2" key={k}>
                    <img
                      src={item.image}
                      className="h-5 w-5 rounded-full "
                      alt="avt"
                    />
                    <span className="text-xs font-bold tracking-tighter">
                      {item.user}
                    </span>
                    <p className="text-sm">{item.comment}</p>
                    <p className="text-xs text-gray-500">{item.timeStamp}</p>
                  </div>
                ))} */}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Posts;
