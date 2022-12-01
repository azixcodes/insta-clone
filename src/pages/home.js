import React from "react";
import Stories from "../components/Stories";
import Posts from "../components/Posts";
// import MiniProfile from "../components/MiniProfile";
const Home = () => {
  return (
    <main className="flex flex-col gap-3 w-screen  justify-center items-center md:w-full">
      <Stories />
      <Posts />
    </main>
  );
};

export default Home;
