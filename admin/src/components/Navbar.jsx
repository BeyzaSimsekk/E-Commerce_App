import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="flex items-center py-3 px-[4%] justify-between glass">
      <img className="w-[max(12%,80px)]" src={assets.logo} alt="" />
      <button className="buttonAdmin1">Logout</button>
    </div>
  );
};

export default Navbar;
