import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser, FaHammer, FaCode, FaFileAlt } from "react-icons/fa";
import { AVATAR_DEFAULT_URL } from "../constant/constant";
const Navbar = () => {
  const userData = useSelector((store) => store.user);
  const handleLogout = async () => {
    try {
      const result = await axios.post(
        "http://localhost:1001/logout",
        {},
        {
          withCredentials: true,
        }
      );
      toast.success(result.data.message);
    } catch (error) {
      toast.error("An error Occured!");
    }
  };
  return (
    <div className="navbar bg-white shadow-md px-6 py-3">
      {/* Left Section */}
      <div className="flex-1 items-center flex gap-6">
        <Link to="/" className="text-2xl font-bold text-blue-700">
          DevTinder
        </Link>

        {/* Navbar Links */}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-10">
        <Link
          to="/showhackathons"
          className="flex items-center gap-1 text-gray-800 hover:text-blue-700 font-medium"
        >
          <FaHammer /> Hackathons
        </Link>
        <Link
          to="/showdevs"
          className="flex items-center gap-1 text-gray-800 hover:text-blue-700 font-medium"
        >
          <FaCode /> Devs
        </Link>
        <Link
          to="/createpost"
          className="flex items-center gap-1 text-gray-800 hover:text-blue-700 font-medium"
        >
          <FaFileAlt /> Create Post
        </Link>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src={userData?.photoUrl || AVATAR_DEFAULT_URL}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2 shadow text-black"
          >
            <li>
              <Link to="/updateprofile" className="justify-between">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/myposts" className="justify-between">
                My Posts
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <Link to="/login" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
