import React from "react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0, y: -60 }} // ilk durumda görünmez ve biraz aşağıda
      animate={{ opacity: 1, y: 0 }} // görünür hale gelir ve yerine kayar
      transition={{ duration: 0.8, ease: "easeOut" }} // animasyon hızı ve tipi
    >
      <>
        <Navbar />
        <div className="flex w-full">
          <Sidebar />
        </div>
      </>
    </motion.div>
  );
};

export default App;
