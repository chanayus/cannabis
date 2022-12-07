import NextLink from "../components/NextLink"

import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import BestSeller from "../components/home/BestSeller"
import TopShelf from "../components/home/TopShelf"
import ProductCard from "../components/ProductCard"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useTranslation } from "react-i18next"
import CannabisBg from "../components/home/CannabisBg"

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const { t } = useTranslation(["common", "home"])
  const whyOrderRef = useRef(null)

  useEffect(() => {
    // Animate for Hero Section
    gsap.fromTo("#hero-image-cover", { opacity: 0, scale: 1.25 }, { opacity: 1, scale: 1, delay: 0.1, duration: 0.75 })
    gsap.fromTo("#hero-brand-text", { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: 0.3, duration: 0.45 })
    gsap.fromTo("#hero-quote", { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: 0.5, duration: 0.45 })
    gsap.fromTo("#hero-button", { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: 0.7, duration: 0.45 })

    // Animate for why-order Section
    const whyOrderTrigger = { trigger: whyOrderRef.current, start: "top 55%", end: "+=60%", toggleActions: "play reverse play reverse" }

    gsap.fromTo(whyOrderRef.current, { opacity: 0 }, { opacity: 1, duration: 0.35, scrollTrigger: whyOrderTrigger })
    gsap.fromTo("[data-why-card]", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.35, stagger: 0.15, scrollTrigger: whyOrderTrigger })

    //  Animate for Shop Section
    const shopTrigger = { trigger: "#shop-section", start: "top 55%", end: "bottom 55%", toggleActions: "play reverse play reverse" }
    gsap.fromTo("#shop-section", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.35, stagger: 0.15, scrollTrigger: shopTrigger })
  }, [])

  return (
    <>
      <main className="container lg:mb-24 mt-[3rem]">
        <header className="w-full min-h-[340px] h-[67vh] bg-[#000] rounded-xl overflow-hidden relative ">
          <div className="absolute md:p-10 p-8 w-full text-white bottom-[5%] z-10 ">
            <p id="hero-brand-text" className="text-lg opacity-0">
              Cannabis
            </p>
            <h2 id="hero-quote" className="opacity-0 md:my-3 my-2 lg:text-5xl text-4xl font-bold uppercase max-w-[15ch]">
              {t("hero.quote", { ns: "home" })}
            </h2>
            <div id="hero-button" className="flex mt-8 font-semibold whitespace-nowrap opacity-0">
              <NextLink href="/product" className="px-8 py-3 bg-orange mr-6 rounded-lg">
                {t("login")}
              </NextLink>
              <button className="px-8 py-3 border mr-8 ">{t("shop now")}</button>
            </div>
          </div>
          <img
            id="hero-image-cover"
            src="/images/home/hero.jpg"
            alt="hero-image-cover"
            className="opacity-0 w-full h-full object-cover object-[30%_center]"
          />
        </header>

        <section ref={whyOrderRef} className="text-center my-[8vh] opacity-0">
          <img id="why-order-logo" src="/images/logo-mini.svg" alt="logo" width={50} height={50} className="mx-auto mb-6" />
          <h2 className="font-bold md:text-5xl text-4xl mb-3">{t("why-order-us.title", { ns: "home" })}</h2>
          <h4 className="md:text-2xl text-xl">{t("why-order-us.desc", { ns: "home" })}</h4>

          <div className="grid lg:grid-cols-3 grid-cols-1 items-center mt-6 gap-6 ">
            <div data-why-card className="bg-[#EDEDED] dark:bg-black rounded-lg p-6 w-full h-full max-w-[480px] mx-auto">
              <div className="bg-green p-2 w-16 h-16 rounded-xl mx-auto">
                <img src="/icons/clean.svg" alt="icon" width={50} height={50} className="mx-auto  w-full h-full" />
              </div>
              <h3 className="font-bold text-xl mt-3 text-green mb-1">{t("why-order-us.clean.title", { ns: "home" })}</h3>
              <p>{t("why-order-us.clean.desc", { ns: "home" })}</p>
            </div>
            <div data-why-card className="bg-[#EDEDED] dark:bg-black rounded-lg p-6 w-full h-full max-w-[480px] mx-auto">
              <div className="bg-green p-2 w-16 h-16 rounded-xl mx-auto">
                <img src="/icons/delivery.svg" alt="icon" width={50} height={50} className="mx-auto  w-full h-full" />
              </div>
              <h3 className="font-bold text-xl mt-3 text-green mb-1">{t("why-order-us.delivery.title", { ns: "home" })}</h3>
              <p>{t("why-order-us.delivery.desc", { ns: "home" })}</p>
            </div>
            <div data-why-card className="bg-[#EDEDED] dark:bg-black rounded-lg p-6 w-full h-full max-w-[480px] mx-auto">
              <div className="bg-green p-2 w-16 h-16 rounded-xl mx-auto">
                <img src="/icons/quality.svg" alt="icon" width={50} height={50} className="mx-auto w-full h-full" />
              </div>
              <h3 className="font-bold text-xl mt-3 text-green mb-1">{t("why-order-us.quality.title", { ns: "home" })}</h3>
              <p>{t("why-order-us.quality.desc", { ns: "home" })}</p>
            </div>
          </div>
        </section>
      </main>

      <BestSeller t={t} />
      <TopShelf t={t} />

      <section className="container my-20" id="shop-section">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-bold sm:text-5xl text-4xl text-green mb-1">Shop</h2>
            <h2 className="text-stroke-green font-bold sm:text-5xl text-4xl text-transparent">Cannabis</h2>
          </div>
          <NextLink href="/" className="font-bold text-green border md:px-8 px-6 py-2 rounded-lg md:text-xl ">
            {t("view all")}
          </NextLink>
        </div>
        <div className="grid justify-items-center sm:gap-4 gap-2 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-20">
          {[...new Array(16)].map((item, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </section>

      <section className=" bg-green relative pt-10 pb-24">
        <CannabisBg className="opacity-40 w-full h-full absolute top-0 overflow-hidden" />
        <div className="container relative z-10">
          <h2 className="text-[clamp(3.5rem,10vw,10rem)] text-center font-bold text-stroke-white text-[#1C8151]">CANNABIS</h2>
          <main className="lg:p-20 md:p-10 p-4 bg-body-light dark:bg-body-dark rounded-2xl ">
            <div className="flex lg:flex-row flex-col-reverse">
              <div className="grid sm:grid-cols-2 justify-items-center gap-2 w-full">
                <ProductCard />
                <ProductCard />
              </div>
              <div className="flex w-full items-center lg:justify-center relative lg:top-[-50px] my-8">
                <div className="w-14 h-14 bg-green flex-shrink-0 rounded-lg grid place-items-center mr-4 sm:mb-8">
                  <img src="/icons/create.svg" alt="product-style-icon" width={30} height={30} />
                </div>
                <div>
                  <h3 className="sm:text-4xl text-3xl text-green font-bold mb-2">{t("create.title", { ns: "home" })}</h3>
                  <p className="sm:text-xl">Cannabis introduce you</p>
                </div>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col-reverse">
              <div className="grid sm:grid-cols-2 justify-items-center gap-2 w-full">
                <ProductCard />
                <ProductCard />
              </div>
              <div className="flex w-full items-center lg:justify-center relative lg:top-[-50px] my-8">
                <div className="w-14 h-14 bg-green flex-shrink-0 rounded-lg grid place-items-center mr-4 sm:mb-8">
                  <img src="/icons/relax.svg" alt="product-style-icon" width={30} height={30} />
                </div>
                <div>
                  <h3 className="sm:text-4xl text-3xl text-green font-bold mb-2">{t("relax.title", { ns: "home" })}</h3>
                  <p className="sm:text-xl">Cannabis introduce you</p>
                </div>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col">
              <div className="flex w-full items-center relative lg:top-[-50px] my-8">
                <div className="w-14 h-14 bg-green flex-shrink-0 rounded-lg grid place-items-center mr-4 sm:mb-8">
                  <img src="/icons/party.svg" alt="product-style-icon" width={30} height={30} />
                </div>
                <div>
                  <h3 className="sm:text-4xl text-3xl text-green font-bold mb-2">{t("party.title", { ns: "home" })}</h3>
                  <p className="sm:text-xl">Cannabis introduce you</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 justify-items-center gap-2 w-full">
                <ProductCard />
                <ProductCard />
              </div>
            </div>

            <div className="flex lg:flex-row flex-col">
              <div className="flex w-full items-center relative lg:top-[-50px] my-8">
                <div className="w-14 h-14 flex-shrink-0 bg-green rounded-lg grid place-items-center mr-4 sm:mb-8">
                  <img src="/icons/sleep.svg" alt="product-style-icon" width={30} height={30} />
                </div>
                <div>
                  <h3 className="sm:text-4xl text-3xl text-green font-bold mb-2">{t("sleep.title", { ns: "home" })}</h3>
                  <p className="sm:text-xl">Cannabis introduce you</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 justify-items-center gap-2 w-full">
                <ProductCard />
                <ProductCard />
              </div>
            </div>

            <p className="text-center text-green max-w-[80ch] mx-auto my-10">
              Coffeeshop Relax pays a lot of attention to selecting the best products. All our weed and hash products are thoroughly tested, so that
              only the cleanest and strongest varieties end up on our map. View all our weed and hash products and their effect below!
            </p>
            <div className="flex justify-center mb-8">
              <NextLink href="/" className="font-bold text-green border px-8 py-2 rounded-lg text-xl">
                {t("view all")}
              </NextLink>
            </div>
          </main>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home", "nav"])),
    },
  }
}

export default Home
