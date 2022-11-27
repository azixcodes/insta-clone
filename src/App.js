import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Explore,
  Messages,
  Notifications,
  Profile,
  Search,
} from "./pages/index";
import BottomNavigation from "./components/BottomNavigation";
// import MiniTopNavigation from "./components/MiniTopNavigation";
import { useStateContext } from "./contexts/ContextApi";
import MoreOptions from "./layouts/MoreOptions";
import UploadFile from "./components/UploadFile"; //Upload file component when create button is clicked
const App = () => {
  const { addPostModal, setaddPostModal, moreOptionsModal } = useStateContext();

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
    <BrowserRouter>
      <div className="sm:hidden ">
        {/* <MiniTopNavigation /> */}
        <BottomNavigation />
      </div>
      <div className="flex flex-row  w-full min-h-screen gap-4 md:gap-24">
        <div className="w-0 sm:w-20 md:w-56 hidden sm:block">
          <Sidebar />
        </div>
        <div className="routes ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        {/* conditionally rendering upload post component */}
        {addPostModal && (
          <UploadFile
            handleClickOutSide={handleClickOutSide}
            addPostModal={addPostModal}
          />
        )}
        {moreOptionsModal && (
          <div className="fixed top-[342px] left-2">
            <MoreOptions />
          </div>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
