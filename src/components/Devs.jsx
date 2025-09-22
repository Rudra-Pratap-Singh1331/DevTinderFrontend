import React, { useState, useEffect } from "react";
import LeftSideBar from "./leftSideBar";
import RightSideBar from "./RightSideBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AVATAR_DEFAULT_URL } from "../constant/constant";
const Devs = () => {
  const navigate = useNavigate();
  const [feed, setFeed] = useState(null);
  const friends = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    name: `Friend ${i + 1}`,
    photo: `https://i.pravatar.cc/40?img=${i + 1}`,
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

  const fetchDevs = async () => {
    try {
      const devs = await axios.get("http://localhost:1001/user/feed", {
        withCredentials: true,
      });
      setFeed(devs?.data?.UsersToBeShowOnTheFeed);
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("Unauthorized!");
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    fetchDevs();
  }, []);
  return (
    <div className="flex h-screen w-full  p-2.5">
      {/* Left Sidebar */}
      <LeftSideBar friends={friends} />

      {/* Middle Section */}
      <div className="flex-1 overflow-y-auto p-6">
        <h2 className="text-xl font-bold mb-6 text-blue-800">Developers</h2>

        {/* Grid for Developer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {feed?.map((p) => (
            <div key={p.id} className="flex justify-center">
              <div className="card w-full max-w-sm bg-white shadow-xl rounded-xl overflow-hidden">
                {/* Top Section: Circular Profile Image */}
                <div className="flex justify-center mt-6">
                  <img
                    src={p.photoUrl || AVATAR_DEFAULT_URL}
                    alt="Profile"
                    className="rounded-full w-32 h-32 object-cover border-4 border-gray-300"
                  />
                </div>

                {/* Bottom Section: User Info */}
                <div className="card-body flex flex-col gap-4">
                  {/* Centered Name */}
                  <div className="w-full flex justify-center">
                    <h2
                      className="card-title text-center overflow-hidden break-words"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {p.fullName}
                    </h2>
                  </div>

                  {/* Left-aligned Details */}
                  <div className="w-full text-left pl-2 flex flex-col gap-2">
                    <p
                      className="overflow-hidden break-words"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      <strong>Designation:</strong>{" "}
                      {p.designation || "Not available"}
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

                    {/* Centered Buttons */}
                    <div className="card-actions justify-center mt-4 gap-2">
                      <button className="btn btn-primary btn-sm">
                        Connect
                      </button>
                      <button className="btn btn-primary btn-sm">Ignore</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <RightSideBar requests={requests} />
    </div>
  );
};

export default Devs;
