import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import fullLogo from "../public/images/logo-full.svg";
import { HiOutlineGlobeAlt, HiSun, HiMoon } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const { locale, pathname, replace } = useRouter();
  const { theme, setTheme } = useTheme();

  const { t } = useTranslation("nav");

  const currentTheme = theme || "light";

  const changeTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  const changeLanguage = (lang) => {
    replace(pathname, undefined, { locale: lang });
  };



  return (
    <nav className="py-4 bg-white dark:bg-[#252525] fixed top-0 w-full">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image src={fullLogo} alt="logo" width={175} />
          </Link>
          <div className="text-green space-x-6 ml-8">
            <Link href="/">{t("home")}</Link>
            <Link href="/">{t("refferal")}</Link>
            <Link href="/">{t("product")}</Link>
            <Link href="/">{t("blog")}</Link>
            <Link href="/">{t("doc")}</Link>
          </div>
        </div>
        <div className="flex items-center text-green space-x-4">
          <div className="flex items-center text-black dark:text-white">
            <HiOutlineGlobeAlt size="1.5rem" />
            <button onClick={() => changeLanguage("en")} className={`border-r rounded-none px-2 ${locale !== "en" ? "opacity-50" : ""}`}>
              English
            </button>
            <button onClick={() => changeLanguage("th")} className={`px-2 ${locale !== "th" ? "opacity-50" : ""}`}>
              Thai
            </button>
          </div>
          <button onClick={() => changeTheme()}>{theme === "dark" ? <HiMoon size="1.5rem" /> : <HiSun size="1.5rem" />}</button>
          <Link href="/" className="border px-4 py-2 rounded-lg font-bold">{t("login")}</Link>
          <button className="flex items-center rounded-lg relative bg-[#F6F6F6] py-2 px-2 text-black">
            <FiShoppingCart size="1.5rem" className="mr-2" />
            0.00$
            <div className="absolute w-3 h-3 rounded-full  top-[-5px] right-[-5px] bg-orange"></div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
