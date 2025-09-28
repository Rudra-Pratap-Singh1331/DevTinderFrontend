import React, { useState, useEffect } from "react";
import LeftSideBar from "./leftSideBar";
import RightSideBar from "./RightSideBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AVATAR_DEFAULT_URL } from "../constant/constant";
import DevShimmer from "./Shimmer/devShimmer";
import DevsCard from "./DevsCard";

const Devs = () => {
  const navigate = useNavigate();
  const [feed, setFeed] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const fetchDevs = async () => {
    try {
      setLoading(true);
      const devs = await axios.get("http://localhost:1001/user/feed", {
        withCredentials: true,
      });
      setFeed(devs?.data?.UsersToBeShowOnTheFeed);
    } catch (error) {
      setLoading(false);
      if (error.response.status === 401) {
        toast.error("Unauthorized!");
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDevs();
  }, []);

  return (
    <div className="flex h-screen w-full bg-[#1E1E1E] text-[#d4d4d4]">
      {/* Left Sidebar */}
      <LeftSideBar />

      {/* Middle Section */}
      <div className="flex-1 flex flex-col p-6">
        <h2 className="text-xl font-bold mb-6 text-[#569cd6]">Developers</h2>

        {/* Developer Grid with scrollable container */}
        <div
          className="flex-1 overflow-y-auto pr-2"
          style={{ maxHeight: "calc(100vh - 80px)" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
              ? Array(6)
                  .fill(0)
                  .map((_, i) => <DevShimmer key={i} />)
              : feed?.map((p) => <DevsCard key={p.id} p={p} />)}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <RightSideBar requests={requests} />
    </div>
  );
};

export default Devs;
