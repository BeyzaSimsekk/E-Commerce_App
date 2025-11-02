import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(
        `${backendUrl}/api/order/list`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      //console.log(response.data);

      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      <h3 className="text-xl text-pink-300 font-semibold">Order Page ⋆𐙚₊˚⊹♡</h3>
      <div className="pr-8">
        {orders
          .map((order, index) => (
            <div
              className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start rounded-lg border-2 border-gray-500 p-5 md:p-8 my-3 md:my-4 text-sm sm:text-base text-gray-100 bg-gray-800/60 hover:bg-gray-700/40 transition-all duration-300"
              key={index}
            >
              {/* Image */}
              <img
                className="w-15 rounded-lg opacity-70"
                src={assets.parcel_icon}
                alt="admin orders"
              />
              {/* User Details */}
              <div className="border-r-2 border-gray-500 mr-4 h-full">
                <div>
                  {order.items.map((item, index) => {
                    // means item is the last item
                    if (index === order.items.length - 1) {
                      return (
                        <p className="py-0.5" key={index}>
                          {"- "}
                          {item.name} x {item.quantity} <span>{item.size}</span>{" "}
                        </p>
                      );
                    } else {
                      return (
                        <p className="py-0.5" key={index}>
                          {"- "}
                          {item.name} x {item.quantity} <span>{item.size}</span>{" "}
                          ,{" "}
                        </p>
                      );
                    }
                  })}
                </div>
                {/* User's name */}
                <p className="mt-3 mb-1 text-sm sm:text-[17px] font-medium text-pink-300">
                  {order.address.firstName + " " + order.address.lastName}
                </p>
                {/* Address */}
                <div>
                  <p>{order.address.street + ", "}</p>
                  <p>
                    {order.address.city +
                      ", " +
                      order.address.state +
                      ", " +
                      order.address.country +
                      ", " +
                      order.address.zipcode}
                  </p>
                </div>
                <p>{order.address.phone}</p>
              </div>
              {/* Order Details */}
              <div className="border-r-2 border-gray-500 mr-4 h-full">
                <p className="text-sm sm:text-[17px]">
                  Items : {order.items.length}
                </p>
                <p className="mt-3">Method : {order.paymentMethod}</p>
                <p>Payment : {order.payment ? "Done" : "Pending"}</p>
                <p>Date : {new Date(order.date).toLocaleDateString()}</p>
              </div>
              <p className=" text-sm sm:text-[17px] text-pink-300 border-r-2 border-gray-500 mr-4 h-full">
                {currency}
                {"  "}
                {order.amount}
              </p>
              <select className="bg-gray-900/80 rounded-lg p-2 font-semibold">
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default Orders;
