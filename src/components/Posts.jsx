import React, { useState, useEffect } from "react";
// import { posts, suggestions } from "../data/dummy";
import { useStateContext } from "../contexts/ContextApi";
import {
  PaperAirplaneIcon,
  ChatBubbleOvalLeftIcon,
  HeartIcon,
  BookmarkIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";
import PostOptions from "../layouts/PostOptions";
import PostModal from "../layouts/PostModal";
import { faker } from "@faker-js/faker";
const Posts = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  const [post, setpost] = useState([]);
  const [hasText, sethasText] = useState(true);

  const [timelinePosts, settimelinePosts] = useState([]);
  const [loaded, setloaded] = useState(false);
  useEffect(() => {
    const posts = [...Array(50)].map((_, i) => ({
      username: faker.internet.userName(),
      avatar: faker.internet.avatar(),
      post: faker.image.sports(0, 0, true),
      time: faker.date.month(),
      caption: faker.commerce.productDescription(),
      likes: Math.floor(Math.random() * 5000) + 1,
      comments: [
        {
          user: faker.internet.userName(),
          image: faker.internet.avatar(),
          comment:
            "yeah it's amazing.. I want to get the full link from youtube and this si the ebst I want to get the full link from youtube and this si the ebst",
          timeStamp: faker.date.month - Date.UTC,
        },
        {
          user: faker.internet.userName(),
          image: faker.internet.avatar(),
          comment: "already on it...",
          timeStamp: faker.date.month - Date.UTC,
        },
        {
          user: faker.internet.userName(),
          image: faker.internet.avatar(),
          comment: "get some help",
          timeStamp: faker.date.month - Date.UTC,
        },
      ],
    }));
    settimelinePosts(posts);
    setloaded(true);
  }, []);

  const handleClose = () => {
    setmodalOpen(false);
  };
  const handleTextChange = (e) => {
    if (e.length <= 0) {
      sethasText(true);
    } else sethasText(false);
  };
  const { postModalOpen, setpostModalOpen } = useStateContext();
  const handleClickComments = (post) => {
    setpost(post);
    setpostModalOpen(true);
  };

  return (
    <div className="max-w-screen lg:max-w-6xl w-[400px] overflow-hidden">
      {timelinePosts.map((post, index) => (
        <div
          className="relative w-full rounded-md border p-[1px]  flex flex-col h-auto max-h-auto mb-3"
          key={index}
        >
          <div className="flex flex-col ">
            <div className="flex justify-between mx-2 mt-2 pb-2">
              <div className="flex flex-row gap-1 items-center">
                <img
                  src={post.avatar}
                  className="h-7 w-7 rounded-full border"
                  alt="avatar"
                />
                <p className="text-xs font-semibold">{post.username}</p>
              </div>
              <p
                className="font-bold cursor-pointer"
                onClick={() => {
                  setmodalOpen(true);
                }}
              >
                ...
              </p>
            </div>
            {loaded ? (
              <img src={post.post} alt="post" className="w-full h-full" />
            ) : (
              "loading your data"
            )}

            <div className="mx-2 flex flex-row justify-between mt-2">
              <div className="flex gap-3">
                <HeartIcon className="h-5 w-5 hover:text-gray-400 cursor-pointer" />
                <ChatBubbleOvalLeftIcon className="h-5 w-5 hover:text-gray-400 cursor-pointer" />
                <PaperAirplaneIcon className="h-5 w-5 hover:text-gray-400 cursor-pointer -rotate-45" />
              </div>
              <BookmarkIcon className="h-5 w-5 hover:text-gray-400 cursor-pointer " />
            </div>

            <div className="post-description flex flex-col mt-2 mx-2 ">
              <label className="font-semibold text-sm tracking-tight pb-1">
                {post.likes} likes
              </label>
              <p className="text-xs text-slate-600">
                <span className="font-bold text-xs tracking-tightd">
                  {" "}
                  {post.username}
                </span>
                &nbsp;
                {post.caption}
              </p>
            </div>

            <div className="comments  mt-2 ">
              <label
                className="text-xs text-gray-400 font-thin cursor-pointer ml-2"
                onClick={() => {
                  handleClickComments(post);
                }}
              >
                view all {post.comments.length} comments
              </label>
              <p className="text-xs font-thin text-gray-400 ml-2 pb-2">
                {post.time}{" "}
              </p>
              <div className="bg-white w-full flex flex-row justify-between border-t items-center p-2">
                <div className="flex flex-row items-center gap-2 flex-1 mx-2">
                  <FaceSmileIcon className="h-5 w-5" />
                  <textarea
                    placeholder="Add a comment"
                    className="w-full overflow-y-auto outline-none bg-transparent h-6 text-sm scrollbar-none border-none focus:outline-none focus:border-none"
                    onChange={(e) => {
                      handleTextChange(e.target.value);
                    }}
                  ></textarea>
                </div>
                <button
                  className={`text-sky-500 text-xs font-medium ${
                    hasText && "cursor-not-allowed"
                  }`}
                  disabled={hasText}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {modalOpen && (
        <PostOptions modalOpen={modalOpen} handleClose={handleClose} />
      )}
      {postModalOpen && (
        <PostModal
          postModalOpen={postModalOpen}
          setpostModalOpen={setpostModalOpen}
          post={post}
        />
      )}
    </div>
  );
};

export default Posts;
