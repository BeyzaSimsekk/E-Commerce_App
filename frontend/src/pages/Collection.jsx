import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  // logic te kaldım: ***********2.10.30****************

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-300 ">
      {/* LEFT: Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Category Filter */}
        <div
          className={`border rounded-xl border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block shadow-md`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3 accent-[#C586A5]"
                type="checkbox"
                value={"Men"}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3 accent-[#C586A5]"
                type="checkbox"
                value={"Women"}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3 accent-[#C586A5]"
                type="checkbox"
                value={"Kids"}
              />{" "}
              Kids
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div
          className={`border rounded-xl border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block shadow-md`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3 accent-[#C586A5]"
                type="checkbox"
                value={"Topwear"}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3 accent-[#C586A5]"
                type="checkbox"
                value={"Bottomwear"}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3 accent-[#C586A5]"
                type="checkbox"
                value={"Winterwear"}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* RIGHT: Products */}
      <div className="flex-1">
        {/* Product Sort */}
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          <select className="flex-row border-2 rounded-xl border-gray-300 text-sm gap-1 px-2 focus:outline-none focus:border-[#C586A5] shadow-md">
            <option value="relavent" className="hover:bg-[#C586A5]">
              Sort by Relavent
            </option>
            <option value="low-high" className="hover:bg-[#C586A5]">
              Sort by: Low to High
            </option>
            <option value="high-low" className="hover:bg-[#C586A5]">
              Sort by: High to Low
            </option>
          </select>
        </div>
        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
