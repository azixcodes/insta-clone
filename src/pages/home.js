import React from "react";
import Stories from "../components/Stories";
import Posts from "../components/Posts";
import MiniProfile from "../components/MiniProfile";
const Home = () => {
  return (
    <main
      className="w-screen md:w-full grid grid-cols-1 md:grid-cols-2 md:max-w-3xl 
    xl:grid-cols-3 xl:max-w-6xl mx-auto max-w-3xl gap-6 z-0"
    >
      <section className="flex flex-col items-center gap-3">
        <Stories />
        <Posts />
      </section>

      <section className="hidden xl:inline-grid md:col-span-1">
        <div className="relative top-10 -right-20 z-0">
          <MiniProfile />
        </div>
      </section>
    </main>
  );
};

export default Home;
