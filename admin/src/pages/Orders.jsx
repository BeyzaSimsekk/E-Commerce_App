import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

// BU SAYFANIN CSS DÜZENLEMESİNDE KALDIM*********11.58.29*********

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
      <h3 className="text-xl text-gray-200 font-medium">Order Page ⋆𐙚₊˚⊹♡</h3>
      <div>
        {orders
          .map((order, index) => (
            <div key={index}>
              {/* Image */}
              <img
                className="rounded-lg opacity-70"
                src={assets.parcel_icon}
                alt="admin orders"
              />
              {/* User Details */}
              <div>
                <div>
                  {order.items.map((item, index) => {
                    // means item is the last item
                    if (index === order.items.length - 1) {
                      return (
                        <p key={index}>
                          {" "}
                          {item.name} x {item.quantity} <span>{item.size}</span>{" "}
                        </p>
                      );
                    } else {
                      return (
                        <p key={index}>
                          {" "}
                          {item.name} x {item.quantity} <span>{item.size}</span>{" "}
                          ,{" "}
                        </p>
                      );
                    }
                  })}
                </div>
                {/* User's name */}
                <p>{order.address.firstName + " " + order.address.lastName}</p>
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
              <div>
                <p>Items : {order.items.length}</p>
                <p>Method : {order.paymentMethod}</p>
                <p>Payment : {order.payment ? "Done" : "Pending"}</p>
                <p>Date : {new Date(order.date).toLocaleDateString()}</p>
              </div>
              <p>
                {currency}
                {"  "}
                {order.amount}
              </p>
              <select>
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
