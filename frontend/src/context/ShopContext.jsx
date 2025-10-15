import { createContext, use, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  // Sabit veriler (tüm uygulamada erişilebilir olacak)
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false); // hiding/showing search bar

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    // Provider, value içindeki verileri tüm alt bileşenlerle paylaşır
    <ShopContext.Provider value={value}>
      {props.children} {/* Uygulamanın geri kalanı buraya gelir */}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
