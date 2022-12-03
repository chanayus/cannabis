import Link from "next/link";

import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import BestSeller from "../components/Home/BestSeller";
import TopShelf from "../components/Home/TopShelf";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { t } = useTranslation(["common", "home"]);

  return (
    <>
      <main className="container">
        <header className="w-full min-h-[340px] h-[60vh] rounded-xl overflow-hidden relative ">
          <div className="absolute md:p-10 p-8 w-full text-white bottom-[5%]">
            <p className="text-lg">Cannabis</p>
            <h2 className="md:my-3 my-2 lg:text-5xl text-4xl font-bold uppercase max-w-[15ch]">{t("hero.quote", { ns: "home" })}</h2>
            <div className="flex mt-8 font-semibold whitespace-nowrap">
              <button className="px-8 py-3 bg-orange mr-6">{t("hero.login", { ns: "home" })}</button>
              <button className="px-8 py-3 border mr-8 ">{t("hero.shop", { ns: "home" })}</button>
            </div>
          </div>
          <img src="/images/home/hero.jpg" alt="hero-image-cover" className="w-full h-full object-cover object-left" />
        </header>

        <section className="text-center mt-20">
          <Image src="/images/logo-mini.svg" alt="logo" width={50} height={50} className="mx-auto mb-6" />
          <h2 className="font-bold md:text-5xl text-4xl mb-3">{t("why-order-us.title", { ns: "home" })}</h2>
          <h4 className="md:text-2xl text-xl">{t("why-order-us.desc", { ns: "home" })}</h4>

          <div className="grid lg:grid-cols-3 grid-cols-1 items-center mt-6 gap-6 ">
            <div className="bg-[#EDEDED] dark:bg-black rounded-lg p-6 w-full h-full max-w-[480px] mx-auto">
              <div className="bg-green p-2 w-16 h-16 rounded-xl mx-auto">
                <Image src="/icons/clean.svg" alt="icon" width={50} height={50} className="mx-auto  w-full h-full" />
              </div>
              <h3 className="font-bold text-xl mt-3 text-green mb-1">{t("why-order-us.clean.title", { ns: "home" })}</h3>
              <p>{t("why-order-us.clean.desc", { ns: "home" })}</p>
            </div>
            <div className="bg-[#EDEDED] dark:bg-black rounded-lg p-6 w-full h-full max-w-[480px] mx-auto">
              <div className="bg-green p-2 w-16 h-16 rounded-xl mx-auto">
                <Image src="/icons/delivery.svg" alt="icon" width={50} height={50} className="mx-auto  w-full h-full" />
              </div>
              <h3 className="font-bold text-xl mt-3 text-green mb-1">{t("why-order-us.delivery.title", { ns: "home" })}</h3>
              <p>{t("why-order-us.delivery.desc", { ns: "home" })}</p>
            </div>
            <div className="bg-[#EDEDED] dark:bg-black rounded-lg p-6 w-full h-full max-w-[480px] mx-auto">
              <div className="bg-green p-2 w-16 h-16 rounded-xl mx-auto">
                <Image src="/icons/quality.svg" alt="icon" width={50} height={50} className="mx-auto w-full h-full" />
              </div>
              <h3 className="font-bold text-xl mt-3 text-green mb-1">{t("why-order-us.quality.title", { ns: "home" })}</h3>
              <p>{t("why-order-us.quality.desc", { ns: "home" })}</p>
            </div>
          </div>
        </section>
      </main>

      <BestSeller t={t} />
      <TopShelf t={t} />

      <section className="container my-20">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-bold text-5xl text-green mb-1">Shop</h2>
            <h2 className="text-stroke-green font-bold text-5xl text-transparent">Cannabis</h2>
          </div>
          <Link href="/" className="font-bold text-green border px-8 py-2 rounded-lg text-xl">
            {t("view all")}
          </Link>
        </div>
        <div className="grid justify-items-center sm:gap-4 gap-2 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-20">
          {[...new Array(16)].map((item, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </section>

      <section className=" bg-green bg-[url('/images/home/cannabis-bg.png')] pt-10 pb-24">
        <div className="container">
          <h2 className="text-[clamp(3.5rem,10vw,10rem)] text-center font-bold text-stroke-white text-[#1C8151]">CANNABIS</h2>
          <main className="lg:p-20 md:p-10 p-4 bg-body-light dark:bg-body-dark rounded-2xl ">
            <div className="flex lg:flex-row flex-col-reverse">
              <div className="grid sm:grid-cols-2 justify-items-center md:gap-0 gap-2 w-full">
                <ProductCard />
                <ProductCard />
              </div>
              <div className="flex w-full items-center lg:justify-center relative lg:top-[-50px] my-8">
                <div className="w-14 h-14 bg-green flex-shrink-0 rounded-lg grid place-items-center mr-4 mb-8">
                  <img src="/icons/create.svg" alt="product-style-icon" />
                </div>
                <div>
                  <h3 className="sm:text-4xl text-3xl text-green font-bold mb-2">{t("create.title", { ns: "home" })}</h3>
                  <p className="text-xl ">Cannabis introduce you</p>
                </div>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col-reverse">
              <div className="grid sm:grid-cols-2 justify-items-center md:gap-0 gap-2 w-full">
                <ProductCard />
                <ProductCard />
              </div>
              <div className="flex w-full items-center lg:justify-center relative lg:top-[-50px] my-8">
                <div className="w-14 h-14 bg-green flex-shrink-0 rounded-lg grid place-items-center mr-4 mb-8">
                  <img src="/icons/relax.svg" alt="product-style-icon" />
                </div>
                <div>
                  <h3 className="sm:text-4xl text-3xl text-green font-bold mb-2">{t("relax.title", { ns: "home" })}</h3>
                  <p className="text-xl ">Cannabis introduce you</p>
                </div>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col">
              <div className="flex w-full items-center relative lg:top-[-50px] my-8">
                <div className="w-14 h-14 bg-green flex-shrink-0 rounded-lg grid place-items-center mr-4 mb-8">
                  <img src="/icons/party.svg" alt="product-style-icon" />
                </div>
                <div>
                  <h3 className="sm:text-4xl text-3xl text-green font-bold mb-2">{t("party.title", { ns: "home" })}</h3>
                  <p className="text-xl ">Cannabis introduce you</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 justify-items-center md:gap-0 gap-2 w-full">
                <ProductCard />
                <ProductCard />
              </div>
            </div>

            <div className="flex lg:flex-row flex-col">
              <div className="flex w-full items-center relative lg:top-[-50px] my-8">
                <div className="w-14 h-14 flex-shrink-0 bg-green rounded-lg grid place-items-center mr-4 mb-8">
                  <img src="/icons/sleep.svg" alt="product-style-icon" />
                </div>
                <div>
                  <h3 className="sm:text-4xl text-3xl text-green font-bold mb-2">{t("sleep.title", { ns: "home" })}</h3>
                  <p className="text-xl ">Cannabis introduce you</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 justify-items-center md:gap-0 gap-2 w-full">
                <ProductCard />
                <ProductCard />
              </div>
            </div>

            <p className="text-center text-green max-w-[80ch] mx-auto my-10">
              Coffeeshop Relax pays a lot of attention to selecting the best products. All our weed and hash products are thoroughly tested, so that only the cleanest and strongest varieties end up on
              our map. View all our weed and hash products and their effect below!
            </p>
            <div className="flex justify-center">
              <Link href="/" className="font-bold text-green border px-8 py-2 rounded-lg text-xl">
                {t("view all")}
              </Link>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home", "nav"])),
    },
  };
}

export default Home;
