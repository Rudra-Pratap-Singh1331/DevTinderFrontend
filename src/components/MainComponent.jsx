import React, { useState } from "react";

const MainComponent = () => {
  const [activeTab, setActiveTab] = useState("incoming");

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
    <div className="flex h-screen w-full ">
      {/* Left Sidebar */}
      <div className="hidden sm:flex w-1/4 min-w-[220px] bg-white flex-col border-r border-gray-300 shadow-sm">
        <h2 className="text-lg font-bold p-4 border-b border-gray-300 text-blue-700">
          Friends
        </h2>
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {friends.map((f) => (
            <div
              key={f.id}
              className="flex items-center gap-3 p-2 rounded-md hover:bg-blue-50 cursor-pointer"
            >
              <div className="avatar">
                <div className="w-10 h-10 rounded-full">
                  <img src={f.photo} alt={f.name} />
                </div>
              </div>
              <span className="font-medium text-black">{f.name}</span>
            </div>
          ))}
        </div>
      </div>

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
      <div className="w-1/6 min-w-[180px] bg-white flex flex-col border-l border-gray-300 shadow-sm">
        <div role="tablist" className="tabs tabs-bordered p-4">
          <button
            role="tab"
            className={`tab ${
              activeTab === "incoming"
                ? "tab-active text-blue-700"
                : "text-black"
            }`}
            onClick={() => setActiveTab("incoming")}
          >
            Incoming
          </button>
          <button
            role="tab"
            className={`tab ${
              activeTab === "outgoing"
                ? "tab-active text-blue-700"
                : "text-black"
            }`}
            onClick={() => setActiveTab("outgoing")}
          >
            Outgoing
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {requests[activeTab].map((req, i) => (
            <div
              key={i}
              className="alert shadow-sm rounded-md bg-white text-black"
            >
              {req}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
