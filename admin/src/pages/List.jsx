import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { GoXCircleFill } from "react-icons/go";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data);
      if (response.data.success && Array.isArray(response.data.data)) {
        setList(response.data.data);
      } else {
        setList([]);
        toast.error(response.data.message || "No products found");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="text-gray-200 w-full pr-6">
      <p className="mb-3 text-xl text-pink-300 font-semibold">
        All Products List
      </p>

      {/* Table Header */}
      <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] bg-gray-800/80 py-2 px-3 rounded-lg text-sm font-medium text-gray-300 border border-gray-700">
        <span>Image</span>
        <span>Name</span>
        <span>Category</span>
        <span>Price</span>
        <span className="text-center">Action</span>
      </div>

      {/* Table Rows */}
      <div className="flex flex-col mt-2 gap-2">
        {list.map((item, index) => (
          <div
            key={index}
            className="bg-gray-700/40 hover:bg-gray-700/60 border border-gray-600 
              rounded-lg py-3 px-3 text-sm transition-all duration-300
              grid gap-3
              grid-cols-1 sm:grid-cols-[auto_1fr]
              md:grid-cols-[1fr_3fr_1fr_1fr_1fr]
              items-center"
          >
            {/* Image */}
            <div className="flex justify-center sm:justify-start">
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md border border-gray-600"
              />
            </div>

            {/* Text Info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between md:contents">
              <p className="font-medium text-gray-100 truncate text-center md:text-left">
                {item.name}
              </p>
              <p className="text-gray-300 hidden md:block md:text-left">
                {item.category}
              </p>
              <p className="text-gray-300 hidden md:block md:text-left">
                {currency}
                {item.price}
              </p>
              {/* ★ mobile görünümünde alt alta */}
              <div className="flex md:hidden flex-col mt-2 gap-1 text-gray-400 text-center">
                <p>{item.category}</p>
                <p>
                  {currency}
                  {item.price}
                </p>
              </div>
            </div>

            {/* Delete Button */}
            <div className="flex justify-center md:justify-center sm:justify-end">
              <button
                className="text-red-500 hover:text-red-400 hover:scale-110 transition-transform duration-200 cursor-pointer"
                onClick={() => removeProduct(item._id)}
              >
                <GoXCircleFill size={25} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
