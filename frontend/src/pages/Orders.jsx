import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t border-gray-300 pt-16">
      {/* Title */}
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      {/* Orders */}
      <div className="flex flex-col gap-2 ">
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="p-4 border-t border-b rounded-3xl border-[#C586A5] shadow-md text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4 cursor-default"
          >
            {/* Product Info */}
            <div className="flex items-start gap-6 text-sm">
              <img
                className="w-16 sm:w-20 rounded-2xl shadow-md"
                src={item.image[0]}
                alt="products image-order"
              />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {item.price}.00
                  </p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className="mt-2">
                  Date: <span className="text-gray-400">25, Jul, 2024</span>
                </p>
              </div>
            </div>
            {/* Status */}
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">Ready to Ship</p>
              </div>
              {/* Button */}
              <button className="button2">Track Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
