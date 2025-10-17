import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  // console.log(productId);
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        // console.log(item);
        setImage(item.image[0]);
        console.log(item);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 border-gray-300 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* ********************* Product Data ********************* */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* ---------------- Product Images ---------------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full ">
            {/* Product Thumbnails */}
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer rounded-2xl"
                alt="product item"
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto rounded-2xl" src={image} alt="" />
          </div>
        </div>
        {/* ---------------- Product Details/Info ---------------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          {/* Static Stars */}
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />

            <p className="pl-2">(122)</p>
          </div>
          {/* Price */}
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {}
            {productData.price}
          </p>
          {/* Description */}
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          {/* Size (L, M, S) */}
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  className={`border py-2 px-4  cursor-pointer rounded-xl hover:scale-105 transition ease-in-out ${
                    item === size
                      ? "border-fuchsia-950 bg-[#c7518c] text-white"
                      : "bg-gray-100 hover:bg-gray-200 border-gray-300"
                  }`}
                  key={index}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          {/* Add to Cart Button */}
          <button className="bg-fuchsia-950 text-fuchsia-200 px-8 py-3 text-sm active:bg-fuchsia-900 cursor-pointer rounded-xl hover:scale-105 transition ease-in-out">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5 h-[2px] bg-gray-300 border-none" />
          {/* Additional Info (Static) */}
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1 ">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* ********************* Description & Reviews ********************* */}
      <div className="mt-20">
        {/* Tabs */}
        <div className="flex ">
          <b className="border rounded-t-2xl border-gray-300 px-5 py-3 text-md">
            Description
          </b>
          <p className="border rounded-t-2xl border-gray-300 px-5 py-3 text-md">
            Reviews (122)
          </p>
        </div>
        <div className="flex flex-col rounded-b-2xl rounded-r-2xl gap-4 border border-gray-300 px-6 py-6 text-sm text-gray-500 shadow-md">
          <p>
            Redefine your wardrobe with effortless elegance. Explore curated
            fashion pieces designed to make every day feel special. Quality
            fabrics, modern silhouettes, and exclusive designs — all in one
            place. Discover a world of style, comfort, and quality. From
            timeless classics to the latest trends, our collection brings you
            everything you love — crafted with care and delivered straight to
            your door. Shop smarter, live better.
          </p>
          <p>
            Experience shopping like never before. Each piece tells a story of
            craftsmanship, passion, and detail. Elevate your lifestyle with
            premium products made to inspire confidence. Innovation meets
            everyday life. Explore smart gadgets, modern accessories, and
            next-generation tech that make life easier, faster, and more fun.
            Upgrade your world — one click at a time.
          </p>
        </div>
      </div>
      {/* ********************* Display Related Products ********************* */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="flex items-center align-middle justify-center">
      <h1 className="font-semibold text-gray-400 text-2xl">
        The product does not exist
      </h1>
    </div>
  );
};

export default Product;
