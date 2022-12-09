import React from "react";
import Stories from "../components/Stories";
import Posts from "../components/Posts";
import MiniProfile from "../components/MiniProfile";
const Home = () => {
  return (
    <main className="flex flex-row flex-auto gap-9">
      <div>
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
