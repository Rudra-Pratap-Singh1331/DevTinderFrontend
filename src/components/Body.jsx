import React, { useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //this is done so that our redux store is persistent on page referesh
  //this also works as a authenticaation path if the user is not logged in no jwt token , so on hiting this api without login the authmiddleware throws an error and unauthorized will popup
  const fetchLoggedInUser = async () => {
    try {
      const loggedInUser = await axios.get(
        "http://localhost:1001/user/profile",
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(loggedInUser.data.loggedInUser));
    } catch (err) {
      if (err.status === 401) {
        toast.error("Unauthorized!");
        navigate("/login");
      }
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLoggedInUser();
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Body;
