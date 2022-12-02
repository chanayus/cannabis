import Link from "next/link";

import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = () => {
  const { t } = useTranslation("home");

  return (
    <div className="container">
      <header className="w-full h-[60vh] rounded-xl overflow-hidden relative ">
        <div className="absolute p-10 w-full text-white bottom-[5%]">
          <p className="text-lg">Cannabis</p>
          <h2 className="my-3 text-5xl font-bold uppercase max-w-[15ch]">{t("hero.quote")}</h2>
          <div className="flex mt-8 font-semibold">
            <button className="px-8 py-3 bg-orange mr-6">{t("hero.login")}</button>
            <button className="px-8 py-3 border mr-8">{t("hero.shop")}</button>
          </div>
        </div>
        <img src="/images/home/hero.jpg" alt="hero-image-cover" className="w-full h-full object-cover" />
      </header>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "nav"])),
    },
  };
}

export default Home;
