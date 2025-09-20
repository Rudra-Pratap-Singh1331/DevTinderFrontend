import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Navbar = () => {
  const userData = useSelector((store) => store.user);
  console.log(userData);
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
    <div className="navbar bg-white shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-black">DevTinder</a>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto bg-white text-black placeholder:text-black border-[1px] border-black "
        />
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={
                  userData?.photoUrl ||
                  `data:image/png;base64,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`
                } //fallback image if the phtourl is not set
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow text-black"
          >
            <li>
              <a className="justify-between">Profile</a>
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
