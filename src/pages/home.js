import React from "react";
import Stories from "../components/Stories";
import Posts from "../components/Posts";
import MiniProfile from "../components/MiniProfile";
const Home = () => {
  return (
    <main
      className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl 
    xl:grid-cols-3 xl:max-w-6xl mx-auto !max-w-3xl gap-6"
    >
      <section className="col-span-2 space-y-2">
        <Stories />
        <Posts />
      </section>

      <section className="hidden xl:inline-grid md:col-span-1">
        <div className="fixed top-10">
          <MiniProfile />
        </div>
      </section>
    </main>
  );
};

export default Home;
