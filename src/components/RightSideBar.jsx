import React, { useState } from "react";

const RightSideBar = ({ requests }) => {
  const [activeTab, setActiveTab] = useState("incoming");
  return (
    <div className="w-1/6 min-w-[180px] bg-white flex flex-col border-l border-gray-300 shadow-sm">
      <div role="tablist" className="tabs tabs-bordered p-4">
        <button
          role="tab"
          className={`tab ${
            activeTab === "incoming" ? "tab-active text-blue-700" : "text-black"
          }`}
          onClick={() => setActiveTab("incoming")}
        >
          Incoming
        </button>
        <button
          role="tab"
          className={`tab ${
            activeTab === "outgoing" ? "tab-active text-blue-700" : "text-black"
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
  );
};
export default RightSideBar;
