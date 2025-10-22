import { useSelector } from "react-redux";
import LeftSideBar from "./leftSideBar";
import RightSideBar from "./RightSideBar";
import ChatWindow from "./ChatWindow";
import PostCard from "./PostCard";
import useFetchPost from "../hooks/useFetchPost";
import PostShimmer from "./Shimmer/PostShimmer";

const MainComponent = () => {
  // Dummy data
  const chat = useSelector((store) => store.chat);

  //custom hook for fetching;

  const { post, isloading } = useFetchPost();

  return (
    // <div className="flex h-screen w-full bg-[#1E1E1E] text-[#d4d4d4]">
    //   {/* Left Sidebar */}
    //   <LeftSideBar />

    //   {/* Middle Section */}
    <div className="flex-1 overflow-y-auto p-6">
      {chat ? (
        <ChatWindow chat={chat} />
      ) : isloading ? (
        Array(12)
          .fill(0)
          .map((_, i) => {
            return <PostShimmer key={i} />;
          })
      ) : (
        post?.map((post) => {
          return <PostCard post={post} />;
        })
      )}
    </div>

    /* Right Sidebar
      <RightSideBar requests={requests} />
    </div> */
  );
};

export default MainComponent;
