import { Suspense, lazy } from "react";
import Stories from "../components/Stories";
import PostSkeleton from "../layouts/PostSkeleton";
import MiniProfile from "../components/MiniProfile";
const Home = () => {
  const Posts = lazy(() => import("../components/Posts"));

  return (
    <main className="flex flex-row  gap-9 w-full  justify-center md:justify-start">
      <div className="flex flex-col gap-3">
        <Suspense fallback={<PostSkeleton />}>
          <Stories />
          <Posts />
        </Suspense>
      </div>
      <div className="relative top-16 hidden lg:block">
        <MiniProfile />
      </div>
    </main>
  );
};

export default Home;
