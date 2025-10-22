import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 p-8 sm:pt-14 min-h-[80vh] border-t border-gray-300  rounded-3xl shadow-lg shadow-[#7c4760]">
      {/*  ------------- Left Side ------------- */}
      <div className="flex flex-col gap-4 w-full max-w-[480px]">
        <div className="text-xl sm:text-2xl my-2">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex flex-col gap-4">
          {/* Name */}
          <div className="flex gap-3">
            <input
              className="input-border"
              type="text"
              placeholder="First Name"
            />
            <input
              className="input-border"
              type="text"
              placeholder="Last Name"
            />
          </div>
          {/* Email */}
          <input
            className="input-border"
            type="email"
            placeholder="Email Address"
          />
          {/* Address */}
          <input className="input-border" type="text" placeholder="Address" />
          {/* City and State */}
          <div className="flex gap-3">
            <input className="input-border" type="text" placeholder="City" />
            <input className="input-border" type="text" placeholder="State" />
          </div>
          {/* Zipcode and Country */}
          <div className="flex gap-3">
            <input
              className="input-border"
              type="number"
              placeholder="Zipcode"
            />
            <input className="input-border" type="text" placeholder="Country" />
          </div>
          {/* Phone Number */}
          <input className="input-border" type="number" placeholder="Phone" />
        </div>
      </div>
      {/* ------------- Right Side ------------- */}
      <div className="my-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-8">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* Payment Method Selection */}
          <div className="flex gap-3 flex-col lg:flex-row">
            {/* Stripe */}
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border rounded border-fuchsia-300 p-2 px-3 cursor-pointer hover:scale-105 transition ease-in-out shadow-sm shadow-[#dd9fbe79]"
            >
              <p
                className={`min-w-3.5 h-3.5 border-2 border-[#92476f] rounded-full ${
                  method === "stripe" ? "bg-[#d57fad]" : ""
                }`}
              ></p>
              <img
                className="h-5 mx-4"
                src={assets.stripe_logo}
                alt="payment method"
              />
            </div>
            {/* Razorpay */}
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border rounded border-fuchsia-300 p-2 px-3 cursor-pointer hover:scale-105 transition ease-in-out shadow-sm shadow-[#dd9fbe79]"
            >
              <p
                className={`min-w-3.5 h-3.5 border-2 border-[#92476f] rounded-full ${
                  method === "razorpay" ? "bg-[#d57fad]" : ""
                }`}
              ></p>
              <img
                className="h-5 mx-4"
                src={assets.razorpay_logo}
                alt="payment method"
              />
            </div>
            {/* Cash on Delivery */}
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border rounded border-fuchsia-300 p-2 px-3 cursor-pointer hover:scale-105 transition ease-in-out shadow-sm shadow-[#dd9fbe79]"
            >
              <p
                className={`min-w-3.5 h-3.5 border-2 border-[#92476f] rounded-full ${
                  method === "cod" ? "bg-[#d57fad]" : ""
                }`}
              ></p>
              <p className="text-fuchsia-900 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          {/* Buttons */}
          <div className="w-full text-end mt-5">
            <button onClick={() => navigate("/orders")} className="button1">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
