import React from "react";
import Stories from "../components/Stories";
import Posts from "../components/Posts";
import MiniProfile from "../components/MiniProfile";
const Home = () => {
  return (
    <main className="flex flex-row  gap-9 w-full  justify-center md:justify-start">
      <div className="flex flex-col gap-3">
        <Stories />
        <Posts />
      </div>
      <div className="relative top-16 hidden lg:block">
        <MiniProfile />
      </div>
    </main>
  );
};

export default Home;
