import React from "react";

const LeftSideBar = ({ friends }) => {
  return (
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
  );
};

export default LeftSideBar;
