import React from "react";
import { motion } from "framer-motion";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Title */}
      <div className="text-center text-2xl pt-10 border-t border-gray-300">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      {/* Content */}
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-20">
        <motion.img
          className="w-full md:max-w-[480px] rounded-2xl shadow-md"
          src={assets.contact_img}
          alt="contact image"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.div
          className="custom-border flex flex-col justify-center items-start gap-6"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            12345 Mars Space Station <br /> Suite 451, Mars, Space{" "}
          </p>
          <p className="text-gray-500">
            <b>Tel 📞:</b> (911)-451-1453 <br /> <b>Email ✉️:</b>{" "}
            contact@shopix.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Shopix
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job opportunities.
          </p>
          <button className="button3">Explore Jobs</button>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <NewsletterBox />
      </motion.div>
    </motion.div>
  );
};

export default Contact;
