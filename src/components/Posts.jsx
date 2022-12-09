import React, { useEffect, useState } from "react";
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
import BookMarkFilled from "@heroicons/react/20/solid/BookmarkIcon";
const Posts = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  const [post, setpost] = useState([]);
  const [hasText, sethasText] = useState(true);

  const handleClose = () => {
    setmodalOpen(false);
  };
  const handleTextChange = (e) => {
    if (e.length <= 0) {
      sethasText(true);
    } else sethasText(false);
  };
  const {
    postModalOpen,
    setpostModalOpen,
    timelinePosts,
    loaded,
    savedItems,
    setSavedItems,
  } = useStateContext();
  const handleClickComments = (post) => {
    setpost(post);
    setpostModalOpen(true);
  };
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modalOpen]);
  const handleSaveClick = (post) => {
    if (savedItems.includes(post)) {
      alert("this post has been already saved to your profile");
    } else {
      setSavedItems([...savedItems, post]);
    }
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
              <img src={post.post} alt="post" className="w-full h-auto" />
            ) : (
              "loading your data"
            )}

            <div className="mx-2 flex flex-row justify-between mt-2">
              <div className="flex gap-3">
                <HeartIcon className="h-5 w-5 hover:text-gray-400 cursor-pointer" />
                <ChatBubbleOvalLeftIcon className="h-5 w-5 hover:text-gray-400 cursor-pointer" />
                <PaperAirplaneIcon className="h-5 w-5 hover:text-gray-400 cursor-pointer -rotate-45" />
              </div>
              {savedItems.includes(post) ? (
                <BookMarkFilled className="h-5 w-5 " aria-disabled />
              ) : (
                <BookmarkIcon
                  className="h-5 w-5 hover:text-gray-400 cursor-pointer "
                  onClick={() => handleSaveClick(post)}
                />
              )}
            </div>

            <div className="post-description flex flex-col mt-2 mx-2 ">
              <label className="font-semibold text-xs tracking-tight pb-1">
                liked by {post.username} and {post.likes} others
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
