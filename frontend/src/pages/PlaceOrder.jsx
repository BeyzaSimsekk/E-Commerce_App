import React from "react";
import Title from "../components/Title";

const PlaceOrder = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-gray-300">
      {/*  ------------- Left Side ------------- */}
      <div className="flex flex-col gap-4 w-full max-w-[480px]">
        <div className="text-xl sm:text-2xl my-2">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex flex-col gap-4 w-full sm:w-[450px] border p-6 rounded-3xl border-[#C586A5] shadow-md shadow-[#dd9fbe79] ">
          {/* Name */}
          <div className="flex gap-3">
            <input
              className="border border-fuchsia-300 focus:outline-none focus:border-2 focus:border-fuchsia-700 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="First Name"
            />
            <input
              className="border border-fuchsia-300 focus:outline-none focus:border-2 focus:border-fuchsia-700 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="Last Name"
            />
          </div>
          {/* Email */}
          <input
            className="border border-fuchsia-300 focus:outline-none focus:border-2 focus:border-fuchsia-700 rounded py-1.5 px-3.5 w-full"
            type="email"
            placeholder="Email Address"
          />
          {/* Address */}
          <input
            className="border border-fuchsia-300 focus:outline-none focus:border-2 focus:border-fuchsia-700 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Address"
          />
          {/* City and State */}
          <div className="flex gap-3">
            <input
              className="border border-fuchsia-300 focus:outline-none focus:border-2 focus:border-fuchsia-700 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="City"
            />
            <input
              className="border border-fuchsia-300 focus:outline-none focus:border-2 focus:border-fuchsia-700 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="State"
            />
          </div>
          {/* Zipcode and Country */}
          <div className="flex gap-3">
            <input
              className="border border-fuchsia-300 focus:outline-none focus:border-2 focus:border-fuchsia-700 rounded py-1.5 px-3.5 w-full"
              type="number"
              placeholder="Zipcode"
            />
            <input
              className="border border-fuchsia-300 focus:outline-none focus:border-2 focus:border-fuchsia-700 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="Country"
            />
          </div>
          {/* Phone Number */}
          <input
            className="border border-fuchsia-300 focus:outline-none focus:border-2 focus:border-fuchsia-700 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Phone"
          />
        </div>
      </div>
      {/* ------------- Right Side ------------- */}
    </div>
  );
};

export default PlaceOrder;
