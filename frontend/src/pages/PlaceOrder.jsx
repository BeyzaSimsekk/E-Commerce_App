import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { currency } from "../../../admin/src/App";

const PlaceOrder = () => {
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);
  const [method, setMethod] = useState("cod");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name; // name of the input field
    const value = event.target.value; // value of the input field

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Order Payment",
      description: "Order Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response);
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  /**
   * items ➜ ürünün ID’si (_id)
   * item ➜ o ürünün bedeni (size)
   * cartItems[items][item] ➜ o ürünün o bedenden kaç adet sepette olduğunu gösteriyor
   */
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      // console.log(orderItems);
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        // API Calls for COD
        case "cod":
          const response = await axios.post(
            `${backendUrl}/api/order/place`,
            orderData,
            { headers: { Authorization: `Bearer ${token}` } }
          );

          console.log(response.data);
          if (response.data.success) {
            setCartItems({}); // Sepeti temizle
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }

          break;
        case "stripe":
          const responseStripe = await axios.post(
            backendUrl + "/api/order/stripe",
            orderData,
            { headers: { Authorization: `Bearer ${token}` } }
          );

          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data;
            window.location.replace(session_url);
          } else {
            toast.error(responseStripe.data.message);
          }

          break;
        case "razorpay":
          const responseRazorpay = await axios.post(
            backendUrl + "/api/order/razorpay",
            orderData,
            { headers: { Authorization: `Bearer ${token}` } }
          );

          if (responseRazorpay.data.success) {
            //console.log(responseRazorpay.data.order);
            initPay(responseRazorpay.data.order);
          }

          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 p-8 sm:pt-14 min-h-[80vh] border-t border-gray-300  rounded-3xl shadow-lg shadow-[#7c4760]"
    >
      {/*  ------------- Left Side ------------- */}
      <div className="flex flex-col gap-4 w-full max-w-[480px]">
        <div className="text-xl sm:text-2xl my-2">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex flex-col gap-4">
          {/* Name */}
          <div className="flex gap-3">
            <input
              required
              onChange={onChangeHandler}
              name="firstName"
              value={formData.firstName}
              className="input-border"
              type="text"
              placeholder="First Name"
            />
            <input
              required
              onChange={onChangeHandler}
              name="lastName"
              value={formData.lastName}
              className="input-border"
              type="text"
              placeholder="Last Name"
            />
          </div>
          {/* Email */}
          <input
            required
            onChange={onChangeHandler}
            name="email"
            value={formData.email}
            className="input-border"
            type="email"
            placeholder="Email Address"
          />
          {/* Address */}
          <input
            required
            onChange={onChangeHandler}
            name="street"
            value={formData.street}
            className="input-border"
            type="text"
            placeholder="Street"
          />
          {/* City and State */}
          <div className="flex gap-3">
            <input
              required
              onChange={onChangeHandler}
              name="city"
              value={formData.city}
              className="input-border"
              type="text"
              placeholder="City"
            />
            <input
              required
              onChange={onChangeHandler}
              name="state"
              value={formData.state}
              className="input-border"
              type="text"
              placeholder="State"
            />
          </div>
          {/* Zipcode and Country */}
          <div className="flex gap-3">
            <input
              required
              onChange={onChangeHandler}
              name="zipcode"
              value={formData.zipcode}
              className="input-border"
              type="number"
              placeholder="Zipcode"
            />
            <input
              required
              onChange={onChangeHandler}
              name="country"
              value={formData.country}
              className="input-border"
              type="text"
              placeholder="Country"
            />
          </div>
          {/* Phone Number */}
          <input
            required
            onChange={onChangeHandler}
            name="phone"
            value={formData.phone}
            className="input-border"
            type="number"
            placeholder="Phone"
          />
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
            <button type="submit" className="button1">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
