import React from "react";
import { AVATAR_DEFAULT_URL } from "../constant/constant";

const DevsCard = ({ p }) => {
  return (
    <>
      <div key={p.id} className="flex justify-center">
        <div className="w-[260px] max-w-sm bg-[#252526] border border-[#333] shadow-md rounded-xl overflow-hidden">
          {/* Profile */}
          <div className="flex justify-center mt-6">
            <img
              src={p.photoUrl || AVATAR_DEFAULT_URL}
              alt="Profile"
              className="rounded-full w-32 h-32 object-cover border-4 border-[#569cd6]"
            />
          </div>

          {/* Info */}
          <div className="p-4 flex flex-col gap-4">
            <div className="w-full flex justify-center">
              <h2
                className="text-center font-semibold text-[#569cd6] overflow-hidden break-words"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {p.fullName}
              </h2>
            </div>

            <div className="w-full text-left pl-2 flex flex-col gap-2 text-[#d4d4d4]">
              <p
                className="overflow-hidden break-words"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                }}
              >
                <strong>Designation:</strong> {p.designation || "Not available"}
              </p>
              <p
                className="overflow-hidden break-words"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                }}
              >
                <strong>Age:</strong> {p.age || "Not available"}
              </p>
              <p
                className="overflow-hidden break-words"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                }}
              >
                <strong>Tech Stack:</strong>{" "}
                {p.techStack.join(", ") || "Not available"}
              </p>

              <div className="flex justify-center mt-4 gap-2">
                <button className="px-4 py-2 bg-[#007ACC] text-white rounded-md hover:bg-[#569cd6] transition">
                  Connect
                </button>
                <button className="px-4 py-2 bg-[#3C3C3C] text-[#d4d4d4] rounded-md hover:bg-[#2d2d30] transition">
                  Ignore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevsCard;
