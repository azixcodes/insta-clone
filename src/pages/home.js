import React from "react";
import Stories from "../components/Stories";
import Posts from "../components/Posts";
import MiniProfile from "../components/MiniProfile";
const Home = () => {
  return (
    <main className="flex flex-row  w-screen  justify-center items-center md:w-full">
      <div className="flex flex-col gap-3">
        <Stories />
        <Posts />
      </div>
      <div className="absolute top-10 right-16 hidden lg:block w-96 ">
        {/* <MiniProfile /> */}
      </div>
    </main>
  );
};

export default Home;
