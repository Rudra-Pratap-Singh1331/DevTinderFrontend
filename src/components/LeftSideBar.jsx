import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addFriends } from "../store/friendSlice";
import { AVATAR_DEFAULT_URL } from "../constant/constant";
import { addChat } from "../store/chatSlice";

const LeftSideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const friendList = useSelector((store) => store.friendList);
  console.log(friendList);
  const fetchFreindList = async () => {
    try {
      const result = await axios.get("http://localhost:1001/user/friends", {
        withCredentials: true,
      });
      dispatch(addFriends(result?.data?.friends));
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("Unauthorized!");
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    if (!friendList) {
      fetchFreindList();
    }
  }, []);

  return (
    <div className="hidden sm:flex w-1/5 min-w-[220px] bg-[#252526] flex-col border-r border-[#333] shadow-md">
      {/* Header */}
      <h2 className="text-lg font-bold p-4 border-b border-[#333] text-[#569cd6]">
        Friends
      </h2>

      {/* Friend List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {friendList?.map((f) => (
          <div
            key={f._id}
            className="flex items-center gap-3 p-2 rounded-md hover:bg-[#2d2d30] cursor-pointer transition"
            onClick={() => {
              dispatch(addChat(f));
            }}
          >
            <div className="avatar">
              <div className="w-10 h-10 rounded-full ring-2 ring-[#569cd6]">
                <img src={f.photoUrl || AVATAR_DEFAULT_URL} alt={f.name} />
              </div>
            </div>
            <span className="font-medium text-[#d4d4d4]">{f.fullName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
