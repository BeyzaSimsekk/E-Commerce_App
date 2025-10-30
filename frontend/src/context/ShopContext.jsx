import { createContext, use, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  // Sabit veriler (tüm uygulamada erişilebilir olacak)
  const currency = "$";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false); // hiding/showing search bar
  const [cartItems, setCartItems] = useState({});
  const [cartAnimate, setCartAnimate] = useState(false);
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  // Sepete ürün ekleme işlevi
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please select a size before adding to cart.", {
        position: "bottom-right",
        icon: (
          <FaExclamationCircle style={{ color: "#8B3E72", fontSize: "20px" }} />
        ),
        style: {
          color: "#8B3E72",
          fontWeight: "bold",
          fontSize: "14px",
        },
      });
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

    toast.success("Product added to cart!", {
      position: "bottom-right",
      icon: <FaCheckCircle style={{ color: "#8B3E72", fontSize: "20px" }} />,
      style: {
        color: "#8B3E72",
        fontWeight: "bold",
        fontSize: "14px",
      },
    }); // Başarı bildirimi
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

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;
    setCartItems(cartData);

    // Sepete ekleme animasyonunu tetikle
    setCartAnimate(true);
    setTimeout(() => setCartAnimate(false), 400); // animasyon süresi (0.4s)
  };

  /**bu getCartAmount fonksiyonuna async eklersek:
   * Uncaught Error: An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.
   * böyle bir hata alıyoruz. Bu yüzden async kaldırdık.
   * bu hatanın oluşma sebebi: React'ın Server Components ve Client Components arasındaki ayrımı yönetme şekliyle ilgilidir.
   */
  const getCartAmount = () => {
    let totalAmount = 0;

    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);

      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item]; // fiyat * miktar
          }
        } catch (error) {
          console.error("Error calculating cart amount:", error);
        }
      }
    }
    return totalAmount;
  };

  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      //console.log(response.data);

      if (response.data.success) {
        setProducts(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

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
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    token,
    setToken,
  };

  return (
    // Provider, value içindeki verileri tüm alt bileşenlerle paylaşır
    <ShopContext.Provider value={value}>
      {props.children} {/* Uygulamanın geri kalanı buraya gelir */}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
