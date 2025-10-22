import React from "react";
import { motion } from "framer-motion";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }} // sağdan gelsin
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Title */}
      <div className="text-2xl text-center pt-8 border-t border-gray-300">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      {/* Content */}
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] rounded-2xl shadow-md"
          src={assets.about_img}
          alt="about image"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            From timeless classics to modern trends, each piece in our
            collection is crafted with love, care, and attention to detail. Our
            goal is simple: to help you express your true self through
            effortless style.
          </p>
          <p>
            Every collection we release is a reflection of care, creativity, and
            quiet confidence. From selecting high-quality fabrics to ensuring
            every stitch feels intentional, we pour our heart into every detail.
            We aim to make fashion an experience — one that celebrates softness,
            strength, and everyday moments. Whether you are dressing for the
            world or for yourself, we hope our designs bring you a sense of
            warmth, inspiration, and belonging.
          </p>
          <hr className="border border-gray-300" />
          <b className="text-gray-800 mt-1 text-xl text-end">Our Mission</b>
          <p className="text-end">
            Our mission is to redefine everyday fashion by blending comfort,
            quality, and creativity. We believe that clothing should not only
            look good but also feel good — empowering you to express your
            individuality with confidence and grace. Each design is born from
            the idea that style should be accessible, sustainable, and deeply
            personal.
          </p>
        </div>
      </div>
      {/* Second part---------------------------- */}
      {/* Alt title */}
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US?"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20"></div>
    </motion.div>
  );
};

export default About;
