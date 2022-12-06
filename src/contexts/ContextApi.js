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
  const [savedItems, setSavedItems] = useState([]);
  useEffect(() => {
    if (addPostModal || postModalOpen) {
      document.body.style.overflow = "hidden";
    }
  }, [postModalOpen, addPostModal]);
  useEffect(() => {
    const posts = [...Array(50)].map((_, i) => ({
      username: faker.internet.userName(),
      avatar: faker.internet.avatar(),
      post: faker.image.sports(0, 0, true),
      time: faker.date.month(),
      caption: faker.commerce.productDescription(),
      likes: Math.floor(Math.random() * 5000) + 1,
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

  const handleSavedItems = (item) => {
    setSavedItems([...savedItems], item);
    setSavedItems(savedItems);
  };

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
        handleSavedItems,
        savedItems,
        setSavedItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useStateContext = () => useContext(AppContext);
