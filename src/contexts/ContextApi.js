import React, { useState, createContext, useContext } from "react";

const AppContext = createContext();

export const ContextApi = ({ children }) => {
  const [addPostModal, setaddPostModal] = useState(false);
  const [moreOptionsModal, setmoreOptionsModal] = useState(false);
  const [postModalOpen, setpostModalOpen] = useState(false);
  const [post, setpost] = useState([]);

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useStateContext = () => useContext(AppContext);
