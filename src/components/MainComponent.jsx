import { useSelector } from "react-redux";
import LeftSideBar from "./leftSideBar";
import RightSideBar from "./RightSideBar";
import ChatWindow from "./ChatWindow";

const MainComponent = () => {
  // Dummy data
  const chat = useSelector((store) => store.chat);
  
  const posts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    user: `User ${i + 1}`,
    content: `This is post number ${i + 1}. 🚀`,
  }));

  return (
    // <div className="flex h-screen w-full bg-[#1E1E1E] text-[#d4d4d4]">
    //   {/* Left Sidebar */}
    //   <LeftSideBar />

    //   {/* Middle Section */}
      <div className="flex-1 overflow-y-auto p-6">
        {chat ? (
          <ChatWindow chat={chat} />
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-6 text-[#569cd6]">Posts</h2>
            <div className="space-y-6">
              {posts.map((p) => (
                <div
                  key={p.id}
                  className="bg-[#252526] border border-[#333] rounded-md p-4 shadow-sm hover:bg-[#2d2d30] transition"
                >
                  <h3 className="font-semibold text-[#569cd6]">{p.user}</h3>
                  <p className="mt-2 text-[#d4d4d4]">{p.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      /* Right Sidebar
      <RightSideBar requests={requests} />
    </div> */
  );
};

export default MainComponent;
