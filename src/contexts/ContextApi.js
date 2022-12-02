import React, { useState, useEffect, createContext, useContext } from "react";
import { faker } from "@faker-js/faker";
const AppContext = createContext();

export const ContextApi = ({ children }) => {
  const [addPostModal, setaddPostModal] = useState(false);
  const [moreOptionsModal, setmoreOptionsModal] = useState(false);
  const [postModalOpen, setpostModalOpen] = useState(false);
  const [post, setpost] = useState([]);
  const [timelinePosts, settimelinePosts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (postModalOpen) {
      document.body.style.overflow = "hidden";
      console.log(document.body.style.overflow);
    }
  }, [postModalOpen]);
  useEffect(() => {
    const posts = [...Array(50)].map((_, i) => ({
      username: faker.internet.userName(),
      avatar: faker.internet.avatar(),
      post: faker.image.sports(0, 0, true),
      time: faker.date.month(),
      caption: faker.commerce.productDescription(),
      likes: Math.floor(Math.random() * 5000) + 1,
      // comments: [
      //   {
      //     user: faker.internet.userName(),
      //     image: faker.internet.avatar(),
      //     comment:
      //       "yeah it's amazing.. I want to get the full link from youtube and this si the ebst I want to get the full link from youtube and this si the ebst",
      //     timeStamp: faker.date.month - Date.UTC,
      //   },
      //   {
      //     user: faker.internet.userName(),
      //     image: faker.internet.avatar(),
      //     comment: "already on it...",
      //     timeStamp: faker.date.month - Date.UTC,
      //   },
      //   {
      //     user: faker.internet.userName(),
      //     image: faker.internet.avatar(),
      //     comment: "get some help",
      //     timeStamp: faker.date.month - Date.UTC,
      //   },
      // ],
      comments: [...Array(Math.floor(Math.random() * 50) + 1)].map(
        (_, comment) => ({
          user: faker.internet.userName(),
          image: faker.internet.avatar(),
          comment: faker.commerce.productDescription(),
          timeStamp: faker.date.weekday(),
        })
      ),
    }));
    setLoaded(true);
    settimelinePosts(posts);
  }, []);

  return (
    <AppContext.Provider
      value={{
        addPostModal,
        setaddPostModal,
        moreOptionsModal,
        setmoreOptionsModal,
        postModalOpen,
        setpostModalOpen,
        post,
        setpost,
        timelinePosts,
        loaded,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useStateContext = () => useContext(AppContext);
