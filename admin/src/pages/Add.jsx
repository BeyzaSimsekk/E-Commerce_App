import React from "react";
import { assets } from "../assets/assets";

const Add = () => {
  return (
    <form className="flex flex-col w-full items-start gap-3 px-3">
      {/* Upload Images */}
      <div>
        <p className="mb-2">Upload Image</p>

        <div className="flex gap-2">
          {/* image 1 */}
          <label htmlFor="image1">
            <img
              className="w-25 rounded-lg cursor-pointer hover:scale-102 hover:shadow-gray-400 transform ease-in duration-300 shadow-md shadow-gray-700"
              src={assets.upload_area}
              alt=""
            />
            <input type="file" id="image1" hidden />
          </label>
          {/* image 2 */}
          <label htmlFor="image2">
            <img
              className="w-25 rounded-lg cursor-pointer hover:scale-102 hover:shadow-gray-400 transform ease-in duration-300 shadow-md shadow-gray-700"
              src={assets.upload_area}
              alt=""
            />
            <input type="file" id="image2" hidden />
          </label>
          {/* image 3 */}
          <label htmlFor="image3">
            <img
              className="w-25 rounded-lg cursor-pointer hover:scale-102 hover:shadow-gray-400 transform ease-in duration-300 shadow-md shadow-gray-700"
              src={assets.upload_area}
              alt=""
            />
            <input type="file" id="image3" hidden />
          </label>
          {/* image 4 */}
          <label htmlFor="image4">
            <img
              className="w-25 rounded-lg cursor-pointer hover:scale-102 hover:shadow-gray-400 transform ease-in duration-300 shadow-md shadow-gray-700"
              src={assets.upload_area}
              alt=""
            />
            <input type="file" id="image4" hidden />
          </label>
        </div>
      </div>
      <hr className="w-[37%] mt-3 border border-gray-400" />
      {/* Product Name */}
      <div className="w-full mt-2">
        <p className="mb-2">Product Name</p>
        <input
          className="w-full max-w-[500px] rounded px-3 py-2 border-2 border-gray-700 outline-none focus:outline-none focus:border-2 focus:border-gray-500 hover:scale-[1.020] transition ease-in-out duration-500"
          type="text"
          placeholder="Type the product name"
          required
        />
      </div>
      {/* Product Description */}
      <div className="w-full mt-2">
        <p className="mb-2">Product Description</p>
        <textarea
          className="w-full max-w-[500px] rounded px-3 py-2 border-2 border-gray-700 outline-none focus:outline-none focus:border-2 focus:border-gray-500 hover:scale-[1.020] transition ease-in-out duration-500"
          type="text"
          placeholder="Write the product description"
          required
        />
      </div>
      {/* Category & SubCategory Selector */}
      <div className="mt-1 flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        {/* Category */}
        <div>
          <p className="mb-2">Product Category</p>
          <select className="w-full px-3 py-2 border-2 border-gray-700 outline-none focus:outline-none focus:border-2 focus:border-gray-500 hover:scale-[1.020] transition ease-in-out duration-500 rounded-lg">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        {/* SubCategory */}
        <div>
          <p className="mb-2">Sub Category</p>
          <select className="w-full px-3 py-2 border-2 border-gray-700 outline-none focus:outline-none focus:border-2 focus:border-gray-500 hover:scale-[1.020] transition ease-in-out duration-500 rounded-lg">
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        {/* Product Price */}
        <div>
          <p className="mb-2">Product Price</p>
          <input
            className="w-full sm:w-[120px] px-3 py-2 border-2 border-gray-700 outline-none focus:outline-none focus:border-2 focus:border-gray-500 hover:scale-[1.020] transition ease-in-out duration-500 rounded-lg"
            type="number"
            placeholder="25"
          />
        </div>
      </div>
      {/* Product Sizes */}
      <div className="mt-2">
        <p className="mb-2">Product Sizes</p>
        <div className="flex gap-3">
          <div>
            <p className="bg-slate-700 px-3 py-1 rounded cursor-pointer hover:bg-slate-800 hover:scale-105 transition ease-in-out duration-300 active:bg-[#0d2957] active:text-white">
              S
            </p>
          </div>
          <div>
            <p className="bg-slate-700 px-3 py-1 rounded cursor-pointer hover:bg-slate-800 hover:scale-105 transition ease-in-out duration-300 active:bg-[#0d2957] active:text-white">
              M
            </p>
          </div>
          <div>
            <p className="bg-slate-700 px-3 py-1 rounded cursor-pointer hover:bg-slate-800 hover:scale-105 transition ease-in-out duration-300 active:bg-[#0d2957] active:text-white">
              L
            </p>
          </div>
          <div>
            <p className="bg-slate-700 px-3 py-1 rounded cursor-pointer hover:bg-slate-800 hover:scale-105 transition ease-in-out duration-300 active:bg-[#0d2957] active:text-white">
              XL
            </p>
          </div>
          <div>
            <p className="bg-slate-700 px-3 py-1 rounded cursor-pointer hover:bg-slate-800 hover:scale-105 transition ease-in-out duration-300 active:bg-[#0d2957] active:text-white">
              XXL
            </p>
          </div>
        </div>
      </div>
      {/* Best Seller Checkbox */}
      <div className="flex gap-2 mt-2 hover:scale-102 transition ease-in-out duration-300">
        <input
          className="cursor-pointer w-[22px] accent-[#8b5b5b] hover:accent-none"
          type="checkbox"
          id="bestSeller"
        />
        <label className="cursor-pointer text-lg" htmlFor="bestSeller">
          Add to Best Seller
        </label>
      </div>
      {/* Submit Button */}
      <div className="w-full mt-2 mb-28">
        <button
          type="submit"
          className="w-full max-w-[500px] py-3 mt-4 bg-slate-700 rounded-lg cursor-pointer hover:bg-slate-800 hover:text-slate-100 hover:scale-102 transition ease-in-out duration-300 active:bg-[#0d2957] active:text-white"
        >
          ADD THE PRODUCT
        </button>
      </div>
    </form>
  );
};

export default Add;
