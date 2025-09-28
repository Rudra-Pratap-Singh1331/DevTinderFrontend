import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const LeftSideBar = ({ friends }) => {
  const friendList = useSelector((store) => store.friendList);
  console.log(friendList);

  useEffect(() => {}, []);

  return (
    <div className="hidden sm:flex w-1/5 min-w-[220px] bg-[#252526] flex-col border-r border-[#333] shadow-md">
      {/* Header */}
      <h2 className="text-lg font-bold p-4 border-b border-[#333] text-[#569cd6]">
        Friends
      </h2>

      {/* Friend List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {friends?.map((f) => (
          <div
            key={f.id}
            className="flex items-center gap-3 p-2 rounded-md hover:bg-[#2d2d30] cursor-pointer transition"
          >
            <div className="avatar">
              <div className="w-10 h-10 rounded-full ring-2 ring-[#569cd6]">
                <img src={f.photo} alt={f.name} />
              </div>
            </div>
            <span className="font-medium text-[#d4d4d4]">{f.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
