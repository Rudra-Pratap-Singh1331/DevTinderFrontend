import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [formError, setFormError] = useState(null);

  const onChangeHandlerForm = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const API_RESULT = await axios.post(
        "http://localhost:1001/signup",
        {
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        },
        {
          withCredentials: true,
        }
      );

      navigate("/login");
    } catch (err) {
      setFormError(err.response.data);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white flex">
        {/* Brand Name */}
        <div className="absolute top-6 left-8">
          <h1 className="text-3xl font-bold tracking-tight font-sans text-black">
            DevTinder.
          </h1>
        </div>

        {/* Centered Form */}
        <div className="flex flex-1 items-center justify-center">
          <form
            className="flex flex-col gap-6 p-10 bg-white border  rounded-2xl shadow-lg w-[420px]"
            onSubmit={handleOnSubmit}
          >
            <h2 className="text-2xl font-semibold text-gray-900 text-center">
              Create an Account
            </h2>

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fullname
              </label>
              <input
                value={formData.fullName}
                name="fullName"
                type="text"
                placeholder="Enter your username"
                className="w-full border border-black rounded-lg px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                onChange={onChangeHandlerForm}
                required
              />
              <label className="block text-sm font-medium text-red-500 mb-1">
                {formError?.errors?.fullName}
              </label>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                value={formData.email}
                type="email"
                name="email"
                placeholder="mail@site.com"
                className="w-full border border-black rounded-lg px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                onChange={onChangeHandlerForm}
                required
              />
              <label className="block text-sm font-medium text-red-500 mb-1">
                {formError?.errors?.email}
              </label>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                value={formData.password}
                type="password"
                name="password"
                placeholder="Enter password"
                className="w-full border border-black rounded-lg px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                onChange={onChangeHandlerForm}
                required
              />
              <label className="block text-sm font-medium text-red-500 mb-1">
                {formError?.errors?.password.map((errors) => {
                  return <ul>{errors}</ul>;
                })}
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition"
            >
              Sign Up
            </button>

            <p className="text-sm text-gray-600 text-center">
              Already have an account?{" "}
              <Link to="/login" className="underline font-medium">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
