import React, { useState } from "react";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";
import axios from "axios";
import { backendUrl } from "../App";

const Add = ({ token }) => {
  const [loading, setLoading] = useState(false);

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestSeller", bestSeller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const resetForm = () => {
        setName("");
        setDescription("");
        setPrice("");
        setCategory("Men");
        setSubCategory("Topwear");
        setBestSeller(false);
        setSizes([]);
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
      };

      //console.log(response.data);
      if (response.data.success) {
        toast.success(response.data.message);
        resetForm();
      } else {
        toast.error(response.data.message);
      }

      //
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3 px-3"
    >
      {/* Upload Images */}
      <div>
        <p className="mb-2">Upload Image</p>

        <div className="flex gap-2">
          {/* image 1 */}
          <label htmlFor="image1">
            <img
              className="w-25 rounded-lg cursor-pointer hover:scale-102 hover:shadow-gray-400 transform ease-in duration-300 shadow-md shadow-gray-700"
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              alt=""
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
            />
          </label>
          {/* image 2 */}
          <label htmlFor="image2">
            <img
              className="w-25 rounded-lg cursor-pointer hover:scale-102 hover:shadow-gray-400 transform ease-in duration-300 shadow-md shadow-gray-700"
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              alt=""
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="image2"
              hidden
            />
          </label>
          {/* image 3 */}
          <label htmlFor="image3">
            <img
              className="w-25 rounded-lg cursor-pointer hover:scale-102 hover:shadow-gray-400 transform ease-in duration-300 shadow-md shadow-gray-700"
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
              alt=""
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="image3"
              hidden
            />
          </label>
          {/* image 4 */}
          <label htmlFor="image4">
            <img
              className="w-25 rounded-lg cursor-pointer hover:scale-102 hover:shadow-gray-400 transform ease-in duration-300 shadow-md shadow-gray-700"
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              alt=""
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              id="image4"
              hidden
            />
          </label>
        </div>
      </div>
      <hr className="w-[37%] mt-3 border border-gray-400" />
      {/* Product Name */}
      <div className="w-full mt-2">
        <p className="mb-2">Product Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] rounded px-3 py-2 border-2 border-gray-700 outline-none focus:outline-none focus:border-2 focus:border-gray-500 hover:scale-[1.020] transition ease-in-out duration-500 text-gray-200"
          type="text"
          placeholder="Type the product name"
          required
        />
      </div>
      {/* Product Description */}
      <div className="w-full mt-2">
        <p className="mb-2">Product Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] rounded px-3 py-2 border-2 border-gray-700 outline-none focus:outline-none focus:border-2 focus:border-gray-500 hover:scale-[1.020] transition ease-in-out duration-500 text-gray-200"
          type="text"
          placeholder="Write the product description"
          required
        />
      </div>
      {/* Category & SubCategory Selector & Price */}
      <div className="mt-1 flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        {/* Category */}
        <div>
          <p className="mb-2">Product Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border-2 border-gray-700 bg-pink-300/70 text-gray-900 outline-none focus:outline-none focus:border-2 focus:border-gray-500 hover:scale-[1.020] transition ease-in-out duration-500 rounded-lg "
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        {/* SubCategory */}
        <div>
          <p className="mb-2">Sub Category</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-full px-3 py-2 border-2 border-gray-700 bg-pink-300/70 text-gray-900 outline-none focus:outline-none focus:border-2 focus:border-gray-500 hover:scale-[1.020] transition ease-in-out duration-500 rounded-lg "
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        {/* Product Price */}
        <div>
          <p className="mb-2">Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full sm:w-[120px] px-3 py-2 border-2 border-gray-700 outline-none focus:outline-none focus:border-2 focus:border-gray-500 hover:scale-[1.020] transition ease-in-out duration-500 rounded-lg text-gray-200"
            type="number"
            placeholder="25"
          />
        </div>
      </div>
      {/* Product Sizes */}
      <div className="mt-2">
        <p className="mb-2">Product Sizes</p>
        <div className="flex gap-3">
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("S")
                  ? prev.filter((item) => item !== "S")
                  : [...prev, "S"]
              )
            }
          >
            <p
              className={`${
                sizes.includes("S")
                  ? "bg-pink-300 text-gray-800"
                  : "bg-slate-700 text-gray-200"
              } px-3 py-1 rounded cursor-pointer hover:bg-slate-800 hover:scale-105 transition ease-in-out duration-300`}
            >
              S
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("M")
                  ? prev.filter((item) => item !== "M")
                  : [...prev, "M"]
              )
            }
          >
            <p
              className={`${
                sizes.includes("M")
                  ? "bg-pink-300 text-gray-800"
                  : "bg-slate-700 text-gray-200"
              } px-3 py-1 rounded cursor-pointer hover:bg-slate-800 hover:scale-105 transition ease-in-out duration-300`}
            >
              M
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("L")
                  ? prev.filter((item) => item !== "L")
                  : [...prev, "L"]
              )
            }
          >
            <p
              className={`${
                sizes.includes("L")
                  ? "bg-pink-300 text-gray-800"
                  : "bg-slate-700 text-gray-200"
              } px-3 py-1 rounded cursor-pointer hover:bg-slate-800 hover:scale-105 transition ease-in-out duration-300`}
            >
              L
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("XL")
                  ? prev.filter((item) => item !== "XL")
                  : [...prev, "XL"]
              )
            }
          >
            <p
              className={`${
                sizes.includes("XL")
                  ? "bg-pink-300 text-gray-800"
                  : "bg-slate-700 text-gray-200"
              } px-3 py-1 rounded cursor-pointer hover:bg-slate-800 hover:scale-105 transition ease-in-out duration-300`}
            >
              XL
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("XXL")
                  ? prev.filter((item) => item !== "XXL")
                  : [...prev, "XXL"]
              )
            }
          >
            <p
              className={`${
                sizes.includes("XXL")
                  ? "bg-pink-300 text-gray-800"
                  : "bg-slate-700 text-gray-200"
              } px-3 py-1 rounded cursor-pointer hover:bg-slate-800 hover:scale-105 transition ease-in-out duration-300`}
            >
              XXL
            </p>
          </div>
        </div>
      </div>
      {/* Best Seller Checkbox */}
      <div className="flex gap-2 mt-2 hover:scale-102 transition ease-in-out duration-300 text-gray-200">
        <input
          onChange={() => setBestSeller((prev) => !prev)}
          checked={bestSeller}
          className="cursor-pointer w-[22px] accent-pink-400 hover:accent-none"
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
          className={`w-full max-w-[500px] py-3 mt-4 rounded-lg cursor-pointer transition ease-in-out duration-300
          ${
            loading
              ? "bg-gray-300 text-gray-700 cursor-not-allowed"
              : "bg-pink-300 text-gray-800 hover:bg-[#4d2164] hover:text-slate-200 hover:scale-102 active:bg-[#3e1654] active:text-slate-100"
          }`}
        >
          {loading ? "Adding Product..." : "ADD THE PRODUCT"}
        </button>
      </div>
    </form>
  );
};

export default Add;
