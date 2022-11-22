import React from "react";
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
import MiniTopNavigation from "./components/MiniTopNavigation";
const App = () => {
  return (
    <BrowserRouter>
      <div className="md:hidden">
        <MiniTopNavigation />
        <BottomNavigation />
      </div>
      <div className="flex flex-row  w-full min-h-screen gap-32">
        <div className="w-56">
          <Sidebar />
        </div>
        <div className="routes ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
