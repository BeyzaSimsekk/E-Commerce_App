import React from "react";
import { assets } from "../assets/assets";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Footer Column 1 */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="footer logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* Footer Column 2 */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Footer Column 3 */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <div className="flex flex-row gap-1.5 align-middle">
              <FaPhoneAlt className="mt-1" />
              <li>+5-911-451-1453</li>
            </div>
            <div className="flex flex-row gap-1.5 align-middle">
              <IoMail className="mt-1" />
              <li>contact@shopix.com</li>
            </div>
          </ul>
        </div>
      </div>
      {/* Footer Copyright */}
      <div>
        <hr className="h-[2px] bg-gray-300 border-none" />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ shopix.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
