import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2 border-gray-500">
      <div className="flex flex-col gap-4 pt-12 pl-[20%] text-[15px]">
        {/* Add Items */}
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 border border-gray-500 border-r-0 px-3 py-2 rounded-l shadow-md duration-400 hover:scale-101 ${
              isActive
                ? "bg-[#6e415e] hover:bg-[#43293a]"
                : "hover:bg-gray-700 active:bg-gray-800"
            }`
          }
          to="/add"
        >
          <img className="invert w-5 h-5" src={assets.add_icon} alt="" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>
        {/* List Items */}
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 border border-gray-500 border-r-0 px-3 py-2 rounded-l shadow-md duration-400 hover:scale-101 ${
              isActive
                ? "bg-[#6e415e] hover:bg-[#43293a]"
                : "hover:bg-gray-700 active:bg-gray-800"
            }`
          }
          to="/list"
        >
          <img className="invert w-5 h-5" src={assets.order_icon} alt="" />
          <p className="hidden md:block">List Items</p>
        </NavLink>
        {/* Orders */}
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 border border-gray-500 border-r-0 px-3 py-2 rounded-l shadow-md duration-400 hover:scale-101 ${
              isActive
                ? "bg-[#6e415e] hover:bg-[#43293a]"
                : "hover:bg-gray-700 active:bg-gray-800"
            }`
          }
          to="/orders"
        >
          <img className="invert w-5 h-5" src={assets.order_icon} alt="" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
