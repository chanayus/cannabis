import React from "react";
import useTranslation from "../hooks/useTranslation";
import NextLink from "./NextLink";

const Footer = () => {
  const { t } = useTranslation("nav");
  return (
    <footer className="w-full bg-green text-center text-white py-8">
      <div className="space-x-8 mb-6">
        <NextLink href="/">{t("home")}</NextLink>
        <NextLink href="/">{t("refferal")}</NextLink>
        <NextLink href="/">{t("product")}</NextLink>
        <NextLink href="/">{t("blog")}</NextLink>
        <NextLink href="/">{t("doc")}</NextLink>
      </div>
      <div className="flex items-center justify-center space-x-8 mb-6">
        <NextLink href="https://facebook.com" target="_blank">
          <img src="/icons/facebook.svg" width={40} height={40} alt="facebook-icon" />
        </NextLink>
        <NextLink href="https://twitter.com" target="_blank">
          <img src="/icons/twitter.svg" width={40} height={40} alt="twitter-icon" />
        </NextLink>
        <NextLink href="https://web.telegram.org/" target="_blank">
          <img src="/icons/telegram.svg" width={40} height={40} alt="telegram-icon" />
        </NextLink>
        <NextLink href="https://discord.com" target="_blank">
          <img src="/icons/discord.svg" width={40} height={40} alt="discord-icon" />
        </NextLink>
      </div>
      <p>© 2022 Your Company, Inc. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
