import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const WelcomeMessage = () => {
  return (
    <motion.div
      className="flex justify-start items-center text-3xl sm:text-4xl font-semibold text-[#bb7ca5] mt-8 ml-4 md:ml-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <Typewriter
        options={{
          strings: [
            "Welcome back, Admin!",
            "Ready to manage your store?",
            "Let’s make today productive!",
          ],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 40,
        }}
      />
    </motion.div>
  );
};

export default WelcomeMessage;
