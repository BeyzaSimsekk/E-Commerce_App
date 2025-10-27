import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

const HomeSpline = () => {
  return (
    <motion.div
      className="align-bottom w-full mt-4 relative"
      style={{
        height: "calc(100vh - 150px)", // Navbar + WelcomeMessage boşluğunu çıkar
        minHeight: "400px",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* İhtiyaca göre boyut ayarlayabilirsin */}
      <Spline scene="https://prod.spline.design/LqMgtxHYSvwpWXWx/scene.splinecode" />
    </motion.div>
  );
};

export default HomeSpline;
