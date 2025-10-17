import { createContext, use, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  // Sabit veriler (tüm uygulamada erişilebilir olacak)
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false); // hiding/showing search bar
  const [cartItems, setCartItems] = useState({});
  const [cartAnimate, setCartAnimate] = useState(false);

  // Sepete ürün ekleme işlevi
  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Please select a size before adding to cart.");
      return;
    }

    let cartData = structuredClone(cartItems); // Mevcut sepet verilerini klonla

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1; // Aynı ürün ve beden varsa miktarı artır
      } else {
        cartData[itemId][size] = 1; // Aynı ürün farklı beden ekleniyor
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1; // Yeni ürün ekleniyor
    }

    setCartItems(cartData); // Sepet verilerini güncelle

    // Sepete ekleme animasyonunu tetikle
    setCartAnimate(true);
    setTimeout(() => setCartAnimate(false), 400); // animasyon süresi (0.4s)
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.error("Error calculating cart count:", error);
        }
      }
    }
    return totalCount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    cartAnimate,
  };

  return (
    // Provider, value içindeki verileri tüm alt bileşenlerle paylaşır
    <ShopContext.Provider value={value}>
      {props.children} {/* Uygulamanın geri kalanı buraya gelir */}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
