import dynamic from "next/dynamic";

import Navbar from "../components/Navbar"

const Footer = dynamic(() => import("./Footer"), {
  ssr: false,
});

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-[calc(100vh-200px)] pt-[7.5rem] py-[7.5vh]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
