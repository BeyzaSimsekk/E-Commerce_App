import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950">
      <div
        className=" bg-gray-700/30 shadow-lg drop-shadow-gray-950 rounded-lg px-12 py-9 max-w-md
      backdrop-blur-md border-b-2 border-gray-600/80"
      >
        <h1 className="text-3xl text-center font-bold mb-4">ADMIN PANEL</h1>
        <hr className=" shadow-xl shadow-gray-900 border-1 border-gray-400 mb-12" />
        <form>
          {/* Email */}
          <div className="mb-3 min-w-72">
            <p className="text-md font-medium text-gray-300 mb-2">
              Email Address
            </p>
            <input
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
