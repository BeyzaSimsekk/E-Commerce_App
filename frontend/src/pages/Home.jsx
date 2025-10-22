import { motion } from "framer-motion";

import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsletterBox";

const Home = () => {
  return (
    <motion.div
      className="overflow-hidden"
      initial={{ opacity: 0, y: 40 }} // ilk durumda görünmez ve biraz aşağıda
      animate={{ opacity: 1, y: 0 }} // görünür hale gelir ve yerine kayar
      transition={{ duration: 0.8, ease: "easeOut" }} // animasyon hızı ve tipi
    >
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </motion.div>
  );
};

export default Home;
