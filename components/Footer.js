import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image from "next/image";


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
          <Image src="/icons/facebook.svg" width={40} height={40} alt="facebook-icon" />
        </Link>
        <Link href="/">
          <Image src="/icons/twitter.svg" width={40} height={40} alt="twitter-icon" />
        </Link>
        <Link href="/">
          <Image src="/icons/telegram.svg" width={40} height={40} alt="telegram-icon" />
        </Link>
        <Link href="/">
          <Image src="/icons/discord.svg" width={40} height={40} alt="discord-icon" />
        </Link>
      </div>
      <p>© 2022 Your Company, Inc. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
