import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      //console.log(email, password);
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      //console.log(response);

      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen w-full flex gap-2 items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950">
      <div
        className=" bg-gray-700/30 shadow-lg drop-shadow-gray-950 rounded-lg px-12 py-9 max-w-md
      backdrop-blur-md border-b-2 border-gray-600/80"
      >
        <h1 className="text-3xl text-center font-bold mb-4">ADMIN PANEL</h1>
        <hr className=" shadow-xl shadow-gray-900 border-1 border-gray-400 mb-12" />
        <form onSubmit={onSubmitHandler}>
          {/* Email */}
          <div className="mb-3 min-w-72">
            <p className="text-md font-medium text-gray-300 mb-2">
              Email Address
            </p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="rounded w-full px-3 py-2 border-2 border-gray-700 outline-none focus:outline-none focus:border-2 focus:border-gray-500 hover:scale-[1.020] transition ease-in-out duration-500"
              type="email"
              placeholder="Enter your email (your@email.com)"
              required
            />
          </div>
          {/* Password */}
          <div className="mb-3 min-w-72">
            <p className="text-md font-medium text-gray-300 mb-2">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="rounded w-full px-3 py-2 border-2 border-gray-700 outline-none focus:outline-none focus:border-2 focus:border-gray-500 hover:scale-[1.020] transition ease-in-out duration-500"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            className="mt-4 w-full py-2 px-4 font-medium rounded-lg text-gray-800 bg-gray-300 cursor-pointer hover:bg-gray-600 hover:text-gray-100 hover:scale-102 transition ease-in-out duration-300 active:bg-gray-900 active:text-gray-100"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
