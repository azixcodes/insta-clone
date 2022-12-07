import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Explore,
  Messages,
  Notifications,
  Profile,
  Search,
  Saved,
} from "./pages/index";
import BottomNavigation from "./components/BottomNavigation";
// import MiniTopNavigation from "./components/MiniTopNavigation";
import { useStateContext } from "./contexts/ContextApi";
import MoreOptions from "./layouts/MoreOptions";
import UploadFile from "./components/UploadFile"; //Upload file component when create button is clicked
const App = () => {
  const {
    addPostModal,
    setaddPostModal,
    moreOptionsModal,
    setmoreOptionsModal,
  } = useStateContext();

  const handleClickOutSide = () => {
    setaddPostModal(!addPostModal);
  };
  useEffect(() => {
    if (addPostModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-2 md:px-0">
      <Sidebar />
      <div className="routes relative md:left-24 lg:left-60 p-2 md:px-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </div>
      {addPostModal && (
        <UploadFile
          handleClickOutSide={handleClickOutSide}
          addPostModal={addPostModal}
        />
      )}
      {moreOptionsModal && (
        <div className="absolute bottom-12 left-2 hidden md:block">
          <MoreOptions />
        </div>
      )}
    </div>
  );
};

export default App;
