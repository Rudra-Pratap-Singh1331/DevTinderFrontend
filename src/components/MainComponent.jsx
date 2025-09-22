
import LeftSideBar from "./leftSideBar";
import RightSideBar from "./RightSideBar";

const MainComponent = () => {
  // Dummy data
  const friends = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    name: `Friend ${i + 1}`,
    photo: `https://i.pravatar.cc/40?img=${i + 1}`,
  }));

  const posts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    user: `User ${i + 1}`,
    content: `This is post number ${i + 1}. 🚀`,
  }));

  const requests = {
    incoming: [
      "Rahul sent you a request",
      "Sneha sent you a request",
      "Karan sent you a request",
      "Aman sent you a request",
    ],
    outgoing: [
      "You sent request to Priya",
      "You sent request to Arjun",
      "You sent request to Meera",
    ],
  };

  return (
    <div className="flex h-screen w-full  p-2.5">
      {/* Left Sidebar */}
      <LeftSideBar friends={friends} />

      {/* Middle Section */}
      <div className="flex-1 overflow-y-auto p-6">
        <h2 className="text-xl font-bold mb-6 text-blue-800">Posts</h2>
        <div className="space-y-6">
          {posts.map((p) => (
            <div
              key={p.id}
              className="card bg-white shadow-md rounded-md p-4 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-blue-700">{p.user}</h3>
              <p className="text-gray-800 mt-2">{p.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <RightSideBar requests={requests} />
    </div>
  );
};

export default MainComponent;
