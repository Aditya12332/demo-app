import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email) {
      dispatch(login(storedUser));
      alert("Login successful!");
      navigate("/account");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-end min-h-screen px-6 text-center bg-white">
      <div className="flex flex-col w-full max-w-md min-h-screen p-6 bg-[#fbfbfb] rounded-lg shadow-md">
        <h1 className="mb-3 text-3xl font-bold text-left font-rubik text-rubik-28 font-medium text-textColor capitalize">Sign in to your PopX account</h1>
        <p className="mb-5 text-left text-gray-500  font-rubik text-rubik-18 font-regular capitalizetext-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, beatae.
        </p>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Field */}
          <div className="relative mt-6">
            <label
              htmlFor="email"
              className="absolute -top-2 left-3 bg-[#fbfbfb] px-1 text-sm font-rubik text-rubik-13 font-regular text-purple-600"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              
              className="w-full px-3 pt-4 pb-2 text-sm text-gray-900 bg-transparent border-2 border-purple-600 rounded-md focus:outline-none focus:border-purple-700"
            />
          </div>
          
          {/* Password Field */}
          <div className="relative mt-6">
            <label
              htmlFor="password"
              className="absolute -top-2 left-3 bg-[#fbfbfb] px-1 text-sm font-rubik text-rubik-13 font-regular text-purple-600"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 pt-4 pb-2 text-sm text-gray-900 bg-transparent border-2 border-purple-600 rounded-md focus:outline-none focus:border-purple-700"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 text-white bg-[#9445ee] rounded-md hover:bg-[#6f28c0] font-rubik text-rubik-16 font-regular "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
