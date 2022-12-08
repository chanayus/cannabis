import React, { useState } from "react"
import { FaHeart } from "react-icons/fa"
import { FiShoppingCart } from "react-icons/fi"
import RoundProgress from "../RoundProgress"
import NextLink from "../NextLink"

const Header = ({ t }) => {
  const [selectedWeight, setSelectedWeight] = useState("3g")
  const [liked, setLiked] = useState(false)

  const activeStyle = "w-14 h-12 bg-green text-white"
  const inActiveStyle = "w-14 h-12 border border-gray-light"

  const priceRate = {
    "3g": "฿540/3 G",
    "10g": "฿760/10 G",
    "30g": "฿1240/30 G",
  }

  return (
    <section className="relative">
      <div className="container-no-padding grid items-center lg:grid-cols-2 relative z-10 ">
        <div className="flex items-center md:flex-row flex-col-reverse p-8">
          <div className="grid gap-4 md:grid-cols-1 grid-cols-3">
            <RoundProgress value={15.6} unit="THC" />
            <RoundProgress value={0} unit="CBD" />
            <RoundProgress value={50} unit="Sativa" />
          </div>
          <div className="mx-auto w-[13rem] h-[20rem] mb-2">
            <img
              src="/images/products/1.png"
              alt="product-image"
              width={208}
              height={320}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="p-8 lg:bg-transparent lg:dark:bg-transparent bg-white dark:bg-black ">
          <img src="/images/aaa.svg" alt="aaa-badge" width={120} height={40} className="mb-2 relative lg:left-[-8%] left-0" />

          <p className="text-green mb-4">Cannabis</p>
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-4xl leading-[1.15]">Strawberry Kush</h2>
            <button onClick={() => setLiked(!liked)} className="p-2 rounded-lg bg-green-100 dark:bg-[rgb(49,74,65)]">
              <FaHeart size="1.5rem" color={`${liked ? "#de3c3c" : "#FFF"}`} />
            </button>
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
            Relaxation is the keyword at Gelato . Novice users will soon be overwhelmed by the relaxed and euphoric effect. Can you take a beating?
            Then Gelato can also give you a boost on a productive and creative level level.
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
  )
}

export default Header
