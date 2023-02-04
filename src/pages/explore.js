import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

import {
  HandThumbUpIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/outline";
const Explore = () => {
  const [posts, setPosts] = useState([]);
  const [online, setonline] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", () => {
      setonline(true);
    });
    window.addEventListener("offline", () => {
      setonline(false);
    });
  }, []);

  useEffect(() => {
    const posts = [...Array(20)].map((_, i) => ({
      username: faker.internet.userName(),
      avatar: faker.image.sports(0, 0, true),
      interactions: [
        {
          likesCount: Math.floor(Math.random() * 5000) + 1,
          commentsCount: Math.floor(Math.random() * 5000) + 1,
        },
      ],
    }));
    setPosts(posts);
  }, []);
  return (
    <div
      className="w-[100rem] md:pr-2 max-w-7xl flex flex-row flex-wrap gap-3 
    justify-center md:justify-start mt-5 m-0 mx-0"
    >
      {online ? (
        <>
          {posts.map((post, index) => (
            <div
              className="relative md:h-auto max-h-full md:w-auto w-full h-auto  md:p-0
           bg-white rounded-sm cursor-pointer group  "
              key={index}
            >
              <img
                src={post.avatar}
                className="w-auto max-w-[400px] min-w-[200px] h-auto min-h-[300px] "
                alt="post"
              />
              <div className=" flex-row hidden group-hover:flex ">
                {post.interactions.map((interactions, i) => (
                  <div
                    className="absolute top-0 left-0 hidden w-full h-full justify-center items-center
         bg-slate-500 opacity-0 group-hover:flex text-white flex-row gap-4 group-hover:opacity-50 duration-500 "
                    key={i}
                  >
                    <div className="flex flex-row ">
                      <HandThumbUpIcon className="h-5 w-5" />
                      <p>{interactions.likesCount}</p>
                    </div>
                    <div className="flex flex-row ">
                      <ChatBubbleOvalLeftIcon className="h-5 w-5" />
                      <p>{interactions.commentsCount}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      ) : (
        <h2>You are not connected</h2>
      )}
    </div>
  );
};

export default Explore;
