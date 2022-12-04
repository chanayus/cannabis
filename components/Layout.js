import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

const Footer = dynamic(() => import("./Footer"), {
  ssr: false,
});

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          key={pathname}
          className="w-full min-h-[calc(100vh-200px)] py-[7.5vh] md:pt-[74px] pt-[65px]"
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Layout;
