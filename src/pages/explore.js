import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import Loader from "../layouts/Loader";
import {
  HandThumbUpIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/outline";
const Explore = () => {
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(false);
    const posts = [...Array(20)].map((_, i) => ({
      username: faker.internet.userName(),
      avatar: faker.image.sports(2500, 2345, true),
      interactions: [
        {
          likesCount: Math.floor(Math.random() * 5000) + 1,
          commentsCount: Math.floor(Math.random() * 5000) + 1,
        },
      ],
    }));
    setPosts(posts);
    setLoaded(true);
  }, []);
  return (
    <div className="w-full md:pr-2 max-w-7xl flex flex-row flex-wrap gap-6 justify-center md:justify-start mt-5 m-0 mx-0">
      {posts.map((post, index) => (
        <div
          className="relative md:h-56 md:w-auto w-full h-auto p-4 md:p-0 bg-white rounded-sm cursor-pointer group hover:opacity-90"
          key={index}
        >
          <img src={post.avatar} className="w-full h-full  " alt="post" />
          <div className=" flex-row hidden group-hover:flex ">
            {post.interactions.map((interactions, i) => (
              <div
                className="absolute top-4 left-4 flex gap-4 items-center justify-center flex-row w-full  h-full text-sm font-semibold z-50 text-white"
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
      {loaded ? null : <Loader />}
    </div>
  );
};

export default Explore;
