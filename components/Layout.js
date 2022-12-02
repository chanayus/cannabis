import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./Navbar"), {
  ssr: false,
});

const Footer = dynamic(() => import("./Footer"), {
  ssr: false,
});

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-[calc(100vh-200px)] pt-[120px] py-[7.5vh]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
