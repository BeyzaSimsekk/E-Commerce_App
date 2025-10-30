import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Form doldurulup gönderildiğinde çalışacak fonksiyon (sayfa yenilenmesini engellemek için)
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(`${backendUrl}/api/user/register`, {
          name,
          email,
          password,
        });

        if (response.data.success) {
          //setToken(response.data.data.token);
          //localStorage.setItem("token", response.data.data.token);
          toast.success("Account created successfully!");

          // Kayıt başarılı olursa formu login durumuna al
          setCurrentState("Login");
          setName("");
          setEmail("");
          setPassword("");
        } else {
          toast.error(response.data.message);
        }
      } else if (currentState === "Login") {
        const response = await axios.post(`${backendUrl}/api/user/login`, {
          email,
          password,
        });

        if (response.data.success) {
          setToken(response.data.data.token);
          localStorage.setItem("token", response.data.data.token);
          toast.success("Logged in successfully!");
        } else {
          toast.error(response.data.message);
        }
      } else {
        console.error("Unknown currentState:", currentState);
        toast.error("Something went wrong with form state");
      }
    } catch (error) {
      if (error.response) {
        console.log("Backend error:", error.response.data);
        toast.error(error.response.data.message || "Something went wrong");
      } else {
        console.log("Axios error:", error.message);
        toast.error("Network error or server not reachable");
      }
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <motion.div
      className="overflow-hidden flex flex-col p-8 bg-gray-700 rounded-2xl  shadow-lg shadow-[#7c4760] min-h-[80vh] justify-center"
      initial={{ opacity: 0, y: 40 }} // ilk durumda görünmez ve biraz aşağıda
      animate={{ opacity: 1, y: 0 }} // görünür hale gelir ve yerine kayar
      transition={{ duration: 0.6, ease: "easeOut" }} // animasyon hızı ve tipi
    >
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-6  text-gray-200"
      >
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
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="input-border"
            placeholder="Name"
            required
          />
        )}
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="input-border"
          placeholder="Email"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
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
