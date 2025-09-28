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
    <div className="min-h-screen bg-[#1E1E1E] flex">
      {/* Brand Name */}
      <div className="absolute top-6 left-8">
        <h1 className="text-3xl font-bold tracking-tight font-sans text-[#007ACC]">
          DevTinder.
        </h1>
      </div>

      {/* Centered Form */}
      <div className="flex flex-1 items-center justify-center">
        <form
          className="flex flex-col gap-6 p-10 bg-[#252526] rounded-2xl shadow-lg w-[420px] border border-[#3C3C3C]"
          onSubmit={handleOnSubmit}
        >
          <h2 className="text-2xl font-semibold text-[#FFFFFF] text-center">
            Create an Account
          </h2>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-[#CCCCCC] mb-1">
              Full Name
            </label>
            <input
              value={formData.fullName}
              name="fullName"
              type="text"
              placeholder="Enter your fullname"
              className="w-full border border-[#3C3C3C] rounded-lg px-4 py-3 text-[#FFFFFF] placeholder-[#888888] bg-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-[#007ACC]"
              onChange={onChangeHandlerForm}
              required
            />
            {formError?.errors?.fullName && (
              <label className="block text-sm font-medium text-[#F44747] mb-1">
                {formError.errors.fullName}
              </label>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[#CCCCCC] mb-1">
              Email
            </label>
            <input
              value={formData.email}
              type="email"
              name="email"
              placeholder="mail@site.com"
              className="w-full border border-[#3C3C3C] rounded-lg px-4 py-3 text-[#FFFFFF] placeholder-[#888888] bg-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-[#007ACC]"
              onChange={onChangeHandlerForm}
              required
            />
            {formError?.errors?.email && (
              <label className="block text-sm font-medium text-[#F44747] mb-1">
                {formError.errors.email}
              </label>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-[#CCCCCC] mb-1">
              Password
            </label>
            <input
              value={formData.password}
              type="password"
              name="password"
              placeholder="Enter password"
              className="w-full border border-[#3C3C3C] rounded-lg px-4 py-3 text-[#FFFFFF] placeholder-[#888888] bg-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-[#007ACC]"
              onChange={onChangeHandlerForm}
              required
            />
            {formError?.errors?.password && (
              <label className="block text-sm font-medium text-[#F44747] mb-1">
                {formError.errors.password.map((err, i) => (
                  <ul key={i}>{err}</ul>
                ))}
              </label>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-[#007ACC] text-white rounded-lg font-medium hover:bg-[#3794FF] transition"
          >
            Sign Up
          </button>

          <p className="text-sm text-[#CCCCCC] text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#9CDCFE] hover:underline hover:text-[#BFEFFF]"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
