import { createContext } from "react";
import { products } from "../assets/assets";

// SEARCH LOGIC'TE KALDIM*************2.30.40*************

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  // Sabit veriler (tüm uygulamada erişilebilir olacak)
  const currency = "$";
  const delivery_fee = 10;

  const value = { products, currency, delivery_fee };

  return (
    // Provider, value içindeki verileri tüm alt bileşenlerle paylaşır
    <ShopContext.Provider value={value}>
      {props.children} {/* Uygulamanın geri kalanı buraya gelir */}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
