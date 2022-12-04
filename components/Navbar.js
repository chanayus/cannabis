import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import fullLogo from "../public/images/logo-full.svg";
import miniLogo from "../public/images/logo-mini.svg";
import { HiOutlineGlobeAlt, HiSun, HiMoon } from "react-icons/hi";
import { HiBars3 } from "react-icons/hi2";
import { FiShoppingCart } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import useIsMounted from "../hooks/useIsMounted";
import { useState } from "react";

const Navbar = () => {
  const { locale, pathname, replace } = useRouter();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation("nav");
  const [isMounted] = useIsMounted();
  const currentTheme = theme || "light";

  const changeTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  const changeLanguage = (lang) => {
    replace(pathname, undefined, { locale: lang });
  };

  return (
    <>
      <nav className="py-4 bg-white dark:bg-[#252525] fixed top-0 w-full z-30">
        <div className="container flex justify-between items-center relative z-30 ">
          <div className="flex items-center ">
            <Link href="/">
              <Image src={fullLogo} alt="logo" width={175} className="lg:block hidden" />
              <Image src={miniLogo} alt="logo" width={35} className="lg:hidden block" />
            </Link>
            <div className="text-green space-x-6 ml-8 md:block hidden">
              <Link href="/">{t("home")}</Link>
              <Link href="/">{t("refferal")}</Link>
              <Link href="/">{t("product")}</Link>
              <Link href="/">{t("blog")}</Link>
              <Link href="/">{t("doc")}</Link>
            </div>
          </div>
          <div className="md:flex hidden items-center text-green space-x-4">
            <div className="flex items-center text-black dark:text-white">
              <HiOutlineGlobeAlt size="1.5rem" />
              <button onClick={() => changeLanguage("en")} className={`border-r rounded-none px-2 ${locale !== "en" ? "opacity-50 font-medium" : "font-bold"}`}>
                English
              </button>
              <button onClick={() => changeLanguage("th")} className={`px-2 ${locale !== "th" ? "opacity-50 font-medium" : "font-bold"}`}>
                Thai
              </button>
            </div>
            <button onClick={() => changeTheme()}>
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" && isMounted ? (
                  <motion.div key="dark-theme-button" transition={{ duration: 0.2 }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}>
                    <HiMoon size="1.5rem" />
                  </motion.div>
                ) : (
                  <motion.div key="light-theme-button" transition={{ duration: 0.2 }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}>
                    <HiSun size="1.5rem" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            <Link href="/" className="border px-4 py-2 rounded-lg font-bold">
              {t("login")}
            </Link>
            <button className="font-medium relative bg-[#F6F6F6] dark:bg-black dark:text-white py-2 px-2 text-black">
              <FiShoppingCart size="1.5rem" className="mr-2" />
              0.00$
              <div className="absolute w-3 h-3 rounded-full  top-[-5px] right-[-5px] bg-orange"></div>
            </button>
          </div>
          <div className="md:hidden flex items-center ">
            <button className="font-medium relative bg-[#F6F6F6] dark:bg-black dark:text-white py-2 px-2 text-black">
              <FiShoppingCart size="1.5rem" />
              <div className="absolute w-3 h-3 rounded-full  top-[-5px] right-[-5px] bg-orange"></div>
            </button>
            <Link href="/" className="border px-4 py-2 rounded-lg font-bold mx-4 ">
              {t("login")}
            </Link>
            <button onClick={() => setMobileMenuVisible(!mobileMenuVisible)}>
              <HiBars3 size="2rem" />
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {mobileMenuVisible && (
        <div className="fixed w-full px-2 py-8 bg-white dark:bg-[#252525] z-20 top-[0%] pt-[80px] md:hidden block">
          <div className="container">
            <div className="flex flex-col space-y-4 text-green">
              <Link href="/">{t("home")}</Link>
              <Link href="/">{t("refferal")}</Link>
              <Link href="/">{t("product")}</Link>
              <Link href="/">{t("blog")}</Link>
              <Link href="/">{t("doc")}</Link>
            </div>

            <div className="flex items-center text-black dark:text-white mt-6">
              <HiOutlineGlobeAlt size="1.5rem" />
              <button onClick={() => changeLanguage("en")} className={`border-r rounded-none px-2 ${locale !== "en" ? "opacity-50 font-medium" : "font-bold"}`}>
                English
              </button>
              <button onClick={() => changeLanguage("th")} className={`px-2 ${locale !== "th" ? "opacity-50 font-medium" : "font-bold"}`}>
                Thai
              </button>
            </div>
            <div className="mt-6 flex items-center">
              Theme :
              <button onClick={() => changeTheme()} className="ml-4 ">
                <AnimatePresence mode="wait" initial={false}>
                  {theme === "dark" && isMounted ? (
                    <motion.div
                      className="flex items-center"
                      key="dark-theme-button"
                      transition={{ duration: 0.2 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      <HiMoon size="1.5rem" className="mr-1" />
                      <p className="opacity-80">Dark</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      className="flex items-center"
                      key="light-theme-button"
                      transition={{ duration: 0.2 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      <HiSun size="1.5rem" className="mr-1" />
                      <p className="opacity-80">Light</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
