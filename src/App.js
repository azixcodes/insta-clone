import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import {
  Home,
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
  const { addPostModal, setaddPostModal, moreOptionsModal } = useStateContext();

  const MyComponent = React.lazy(() => import("./pages/explore"));

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
    <>
      <BottomNavigation />
      <div className="grid grid-cols-1 md:grid-cols-2 px-2 md:px-0">
        <Sidebar />
        <div className="routes relative sm:left-24 lg:left-72 p-2 md:px-0 flex  w-screen lg:w-[900px]  flex-row justify-center items-center md:justify-start md:items-start mx-auto md:mx-2">
          <Suspense fallback="loading....">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<MyComponent />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/search" element={<Search />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/saved" element={<Saved />} />
            </Routes>
          </Suspense>
        </div>

        {addPostModal && (
          <UploadFile
            handleClickOutSide={handleClickOutSide}
            addPostModal={addPostModal}
          />
        )}
        {moreOptionsModal && (
          <div className="fixed bottom-12 left-2 hidden md:block">
            <MoreOptions />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
