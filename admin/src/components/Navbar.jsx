import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center py-3 px-[4%] justify-between glass">
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="Logo" />
      </Link>
      <button className="buttonAdmin1">Logout</button>
    </div>
  );
};

export default Navbar;
