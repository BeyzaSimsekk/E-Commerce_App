import { createContext, use, useEffect, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  // Sabit veriler (tüm uygulamada erişilebilir olacak)
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false); // hiding/showing search bar
  const [cartItems, setCartItems] = useState({});

  // Sepete ürün ekleme işlevi
  const addToCart = (itemId, size) => {
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
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

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
  };

  return (
    // Provider, value içindeki verileri tüm alt bileşenlerle paylaşır
    <ShopContext.Provider value={value}>
      {props.children} {/* Uygulamanın geri kalanı buraya gelir */}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
