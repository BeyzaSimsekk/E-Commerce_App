import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import Sidebar from "./components/Sidebar";
import { useLocation } from "react-router-dom";
import Add from "./pages/Add";
import Orders from "./pages/Orders";
import List from "./pages/List";
import { Routes, Route } from "react-router-dom";
import WelcomeMessage from "./components/WelcomeMessage";
import HomeSpline from "./components/HomeSpline";

// 🧱 Layout bileşeni
const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/"; // sadece ana sayfa

  useEffect(() => {
    if (isHome) {
      document.body.classList.add("home");
    } else {
      document.body.classList.remove("home");
    }
  }, [isHome]);

  return (
    <motion.div
      className="min-h-screen flex flex-col"
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Navbar />
      <div className="flex w-full">
        <Sidebar />

        {/* Ana içerik alanı */}
        <div
          className={`flex-1 w-[70%] mx-auto ${
            isHome
              ? "overflow-hidden -mt-2"
              : "overflow-auto ml-[max(5vw,25px)] my-8 text-gray-500 text-base"
          }`}
        >
          {isHome && <WelcomeMessage />} {/*sadece ana sayfada görünür */}
          {isHome && <HomeSpline />}
          <Routes>
            <Route path="/" element={<div></div>} />
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </motion.div>
  );
};

// 🌐 Router sarmalayıcı
const App = () => {
  return <Layout />;
};

export default App;
