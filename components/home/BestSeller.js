import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import RoundProgress from "../RoundProgress";
import Image from "next/image";
import NextLink from "../NextLink";

gsap.registerPlugin(ScrollTrigger);

const BestSeller = ({ t }) => {
  const [selectedWeight, setSelectedWeight] = useState("3g");
  const [liked, setLiked] = useState(false);
  const containerRef = useRef(null);
  const productDetailRef = useRef(null);

  const activeStyle = "w-14 h-12 bg-green text-white";
  const inActiveStyle = "w-14 h-12 border border-gray-light";

  const priceRate = {
    "3g": "฿540/3 G",
    "10g": "฿760/10 G",
    "30g": "฿1240/30 G",
  };

  useEffect(() => {
    const trigger = { trigger: containerRef.current, start: "10% 55%", end: "55% 55%" };

    gsap.fromTo(".round-progress", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.65, stagger: 0.25, scrollTrigger: trigger });
    gsap.fromTo("#best-seller-product-image", { opacity: 0, scale: 0.75 }, { opacity: 1, scale: 1, delay: 0.1, duration: 0.65, scrollTrigger: trigger });
    gsap.fromTo(productDetailRef.current, { opacity: 0, y: 25 }, { opacity: 1, y: 0, delay: 0.1, duration: 0.65, scrollTrigger: trigger });
  }, []);

  return (
    <section className="relative " ref={containerRef}>
      <div className="container-no-padding grid items-center lg:grid-cols-2 relative z-10 ">
        <div className="flex items-center md:flex-row flex-col-reverse p-8">
          <div className="grid gap-4 md:grid-cols-1 grid-cols-3">
            <RoundProgress value={15.6} unit="THC" />
            <RoundProgress value={0} unit="CBD" />
            <RoundProgress value={50} unit="Sativa" />
          </div>
          <div className="mx-auto w-[13rem] h-[20rem] mb-2">
            <Image id="best-seller-product-image" src="/images/products/1.png" alt="product-image" width={208} height={320} className="w-full h-full object-contain" />
          </div>
        </div>

        <div ref={productDetailRef} className="p-8 lg:bg-transparent lg:dark:bg-transparent bg-white dark:bg-black ">
          <div className="flex justify-between items-center mb-2">
            <Image src="/images/aaa.svg" alt="aaa-badge" width={120} height={40} className="relative lg:left-[-8%] left-0" />
            <NextLink href="/" className="text-orange">
              {t("view all")}
            </NextLink>
          </div>
          <p className="text-green mb-4">{t("best seller")}</p>
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-4xl leading-[1.15]">Strawberry Kush</h2>
            <button onClick={() => setLiked(!liked)}>{liked ? <FaHeart size="1.5rem" color="#de3c3c" /> : <FaRegHeart size="1.5rem" className="opacity-50" />}</button>
          </div>
          <p>earthy, sweet, floral</p>
          <div className="flex md:items-center justify-between md:flex-row flex-col-reverse mt-4">
            <div className="flex space-x-4 md:mt-0 mt-4">
              <button onClick={() => setSelectedWeight("3g")} className={selectedWeight === "3g" ? activeStyle : inActiveStyle}>
                3G
              </button>
              <button onClick={() => setSelectedWeight("10g")} className={selectedWeight === "10g" ? activeStyle : inActiveStyle}>
                10G
              </button>
              <button onClick={() => setSelectedWeight("30g")} className={selectedWeight === "30g" ? activeStyle : inActiveStyle}>
                30G
              </button>
            </div>
            <h3 className="font-bold lg:text-[2.25rem] text-[1.8rem] text-green">{priceRate[selectedWeight]}</h3>
          </div>
          <p className="mt-6 line-clamp-3">
            Relaxation is the keyword at Gelato . Novice users will soon be overwhelmed by the relaxed and euphoric effect. Can you take a beating? Then Gelato can also give you a boost on a
            productive and creative level level.
          </p>
          <span>
            <NextLink href="/" className="underline">
              {t("read more")}
            </NextLink>
          </span>
          <button className="bg-green px-6 py-3 text-white mt-6">
            <FiShoppingCart size="1.5rem" className="mr-2" />
            {t("add to cart")}
          </button>
        </div>
      </div>
      {/* Background */}
      <div className="w-1/2 h-full absolute lg:block hidden top-0 bg-[#FFFFFF] dark:bg-transparent"></div>
      <div className="w-1/2 h-full absolute lg:block hidden top-0 right-0 dark:bg-black"></div>
    </section>
  );
};

export default BestSeller;
