import React, { useState } from "react";
import { motion } from "framer-motion";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <motion.div
      className="overflow-hidden flex flex-col p-8 bg-gray-700 rounded-2xl  shadow-lg shadow-[#7c4760] min-h-[80vh] justify-center"
      initial={{ opacity: 0, y: 40 }} // ilk durumda görünmez ve biraz aşağıda
      animate={{ opacity: 1, y: 0 }} // görünür hale gelir ve yerine kayar
      transition={{ duration: 0.6, ease: "easeOut" }} // animasyon hızı ve tipi
    >
      <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-6  text-gray-200">
        {/* Title */}
        <div className="inline-flex items-center gap-2 mb-2 mt-4">
          <p className="prata-regular text-3xl cursor-default text-shadow-lg text-shadow-[#3e2130]">
            {currentState}
          </p>
          <p className="min-w-3.5 h-3.5 border-2 border-none bg-[#d57fad] rounded-full"></p>
        </div>
        {/* Inputs (Name is only for Sign Up) */}
        {currentState === "Login" ? (
          ""
        ) : (
          <input
            type="text"
            className="input-border"
            placeholder="Name"
            required
          />
        )}
        <input
          type="email"
          className="input-border"
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="input-border"
          placeholder="Password"
          required
        />
        {/* Links */}
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer hover:text-[#e58cbc] hover:scale-105 transition ease-in-out duration-300">
            Forgot your password?
          </p>
          {currentState === "Login" ? (
            <p
              onClick={() => setCurrentState("Sign Up")}
              className="cursor-pointer hover:text-[#e58cbc] hover:scale-105 transition ease-in-out duration-300"
            >
              Don't have an account?
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer hover:text-[#e58cbc] hover:scale-105 transition ease-in-out duration-300"
            >
              Already have an account?
            </p>
          )}
        </div>
        {/* Button */}
        <button className="button3 ">
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </motion.div>
  );
};

export default Login;
