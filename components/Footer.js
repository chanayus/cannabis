import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("nav");
  return (
    <footer className="w-full bg-green text-center text-white py-8">
      <div className="space-x-8 mb-6">
        <Link href="/">{t("home")}</Link>
        <Link href="/">{t("refferal")}</Link>
        <Link href="/">{t("product")}</Link>
        <Link href="/">{t("blog")}</Link>
        <Link href="/">{t("doc")}</Link>
      </div>
      <div className="flex items-center justify-center space-x-8 mb-6">
        <Link href="/">
          <img src="/icons/facebook.svg" alt="facebook-icon" />
        </Link>
        <Link href="/">
          <img src="/icons/twitter.svg" alt="twitter-icon" />
        </Link>
        <Link href="/">
          <img src="/icons/telegram.svg" alt="telegram-icon" />
        </Link>
        <Link href="/">
          <img src="/icons/discord.svg" alt="discord-icon" />
        </Link>
      </div>
      <p>© 2022 Your Company, Inc. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
