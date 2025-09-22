import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../store/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedInUser = useSelector((store) => store.user);
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "********",
    mobileNumber: "",
    age: "",
    gender: "",
    techStack: [], //error handling
    designation: "",
    photoUrl: "",
    profileUpdateStatus: false,
  });
  const [formError, setFormError] = useState(null);

  const fetchProfile = async () => {
    try {
      const loggedInUserResult = await axios.get(
        "http://localhost:1001/user/profile",
        {
          withCredentials: true,
        }
      );

      dispatch(addUser(loggedInUserResult?.data?.loggedInUser));
    } catch (error) {
      if (error.status === 401) {
        toast.error("Unauthorized!");
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
    if (loggedInUser) {
      setUser({
        fullName: loggedInUser.fullName || "",
        email: loggedInUser.email || "",
        password: "********",
        mobileNumber: loggedInUser.mobileNumber || "",
        age: loggedInUser.age || "",
        gender: loggedInUser.gender || "",
        techStack: loggedInUser.techStack || [],
        designation: loggedInUser.designation || "",
        photoUrl: loggedInUser.photoUrl || "",
      });
    }
  }, [loggedInUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await axios.patch(
        "http://localhost:1001/user/profile/update",
        { ...user },
        { withCredentials: true }
      );
      dispatch(addUser(updatedUser?.data?.value));
      navigate("/");
    } catch (error) {
      if (error.response.status === 401) return toast.error("Unauthorized!");
      setFormError(error.response.data);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 p-6 flex flex-col items-center">
      {/* Catching Header */}
      <div className="w-full max-w-6xl mb-8 bg-blue-500 text-white p-4 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-extrabold">Update Your Profile</h1>
        <p className="mt-2 text-lg">
          Keep your information up-to-date to get the best experience
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        {/* Left: User Form */}
        <div className="flex-1 bg-white p-8 rounded-xl shadow-lg overflow-y-auto max-h-[70vh]">
          <h2 className="text-3xl font-bold mb-6 text-black">User Profile</h2>
          <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={user.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="input input-bordered w-full bg-white text-black"
            />
            <label className="block text-sm font-medium text-red-500 mb-1">
              {formError?.errors?.fullName}
            </label>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              disabled
              placeholder="Email"
              className="input input-bordered w-full bg-gray-100 text-black"
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              disabled
              placeholder="Password"
              className="input input-bordered w-full bg-gray-100 text-black"
            />

            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              value={user.mobileNumber}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="input input-bordered w-full bg-white text-black"
            />
            <label className="block text-sm font-medium text-red-500 mb-1">
              {formError?.errors?.mobileNumber}
            </label>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              value={user.age}
              onChange={handleChange}
              placeholder="Age"
              className="input input-bordered w-full bg-white text-black"
            />

            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              value={user.gender}
              onChange={handleChange}
              className="select select-bordered w-full bg-white text-black"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>

            <label htmlFor="techStack">Tech Stack</label>
            <input
              type="text"
              name="techStack"
              value={user.techStack.join(", ")}
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  techStack: e.target.value.split(",").map((t) => t.trim()),
                }))
              }
              placeholder="Tech Stack (comma separated)"
              className="input input-bordered w-full bg-white text-black"
              required
            />
            <label htmlFor="Designation">Designation</label>
            <input
              type="text"
              name="designation"
              value={user.designation}
              onChange={handleChange}
              placeholder="Current Designation"
              className="input input-bordered w-full bg-white text-black"
            />
            <label htmlFor="photoUrl">Photo URL</label>
            <input
              type="text"
              name="photoUrl"
              value={user.photoUrl}
              onChange={handleChange}
              placeholder="Photo URL"
              className="input input-bordered w-full bg-white text-black"
            />
            <button
              type="submit"
              className="text-white bg-black p-2 cursor-pointer"
            >
              {" "}
              Update Profile
            </button>
          </form>
        </div>

        {/* Right: Instagram-style Card */}
        <div className="flex-1 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4 text-black">Preview Card</h2>
          <div className="card w-[60%] bg-white shadow-xl rounded-xl overflow-hidden max-h-[90vh]">
            {/* Top Section: Circular Profile Image */}
            <div className="flex justify-center mt-6">
              <img
                src={
                  user.photoUrl ||
                  `data:image/png;base64,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`
                }
                alt="Profile"
                className="rounded-full w-32 h-34 object-cover border-4 border-gray-300"
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
                    WebkitLineClamp: 1, // max 1 line
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {user.fullName}
                </h2>
              </div>

              {/* Left-aligned Details */}
              <div className="w-full text-left pl-2 flex flex-col gap-2">
                <p
                  className="overflow-hidden break-words"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 1, // limit to 1 line
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  <strong>Designation:</strong>{" "}
                  {user.designation || "Not available"}
                </p>
                <p
                  className="overflow-hidden break-words"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  <strong>Age:</strong> {user.age || "Not available"}
                </p>
                <p
                  className="overflow-hidden break-words"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2, // tech stack can be 2 lines
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  <strong>Tech Stack:</strong>{" "}
                  {user.techStack.join(", ") || "Not available"}
                </p>

                {/* Centered Button */}
                <div className="card-actions justify-center mt-4">
                  <button className="btn btn-primary btn-sm">Connect</button>
                  <button className="btn btn-primary btn-sm">Ignore</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
