import React from "react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import Sidebar from "./components/Sidebar";
import { useLocation } from "react-router-dom";
import Add from "./pages/Add";
import Orders from "./pages/Orders";
import List from "./pages/List";
import { Routes, Route } from "react-router-dom";
import WelcomeMessage from "./components/WelcomeMessage";

// 🧱 Layout bileşeni
const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/"; // sadece ana sayfa

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
        <div className="flex-1 p-8">
          {isHome && <WelcomeMessage />} {/*sadece ana sayfada görünür */}
          <Routes>
            <Route path="/" element={<div></div>} />
            <Route path="/add" element={<Add />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/list" element={<List />} />
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
