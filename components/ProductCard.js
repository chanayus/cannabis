import { FiShoppingCart } from "react-icons/fi"
import { FaHeart } from "react-icons/fa"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import NextLink from "./NextLink"

const ProductCard = ({extraStyle}) => {
  const { t } = useTranslation("common")
  const [liked, setLiked] = useState(false)

  return (
    <div className={`${extraStyle} bg-white dark:bg-black md:rounded-2xl rounded-lg sm:p-4 p-3 w-full max-w-[240px] md:mb-16`}>
      <div className="flex relative">
        <div className={`mb-6 mr-2 sm:block hidden text-green `}>
          <div className="text-center p-2 rounded-full bg-green-100 dark:bg-[rgb(49,74,65)] mb-4">
            <p className="font-bold dark">16.6%</p>
            <p>THC</p>
          </div>
          <div className="text-center p-2 rounded-full bg-green-100 dark:bg-[rgb(49,74,65)] ">
            <p className="font-bold ">2</p>
            <p>CBD</p>
          </div>
        </div>
        <div className="w-[8.45rem] h-[12rem] md:absolute lg:top-[-35%] top-[-25%] right-[-2.5%] md:mx-none mx-auto">
          <img src="/images/products/1.png" width={135} height={192} alt="product-image" className="w-full h-full object-contain" />
        </div>
      </div>
      <div>
        <NextLink href="/product">
          <h3 className="text-green font-bold sm:text-xl text-lg">Strawberry Kush</h3>
        </NextLink>
        <h4 className="text-green sm:text-base text-sm line-clamp-1">earthy, sweet, floral</h4>
        <div className="flex items-center justify-between mt-2">
          <h3 className="text-orange font-bold sm:text-2xl text-lg">฿540 G</h3>
          <button aria-label="like-button" onClick={() => setLiked(!liked)} className="p-2 rounded-lg bg-green-100 dark:bg-[rgb(49,74,65)]">
            <FaHeart size="1.5rem" color={`${liked ? "#de3c3c" : "#FFF"}`} />
          </button>
        </div>
      </div>
      <button aria-label="add-to-cart" className="border-green border text-green px-6 py-3 w-full mt-4 whitespace-nowrap">
        <FiShoppingCart size="1.5rem" className="mr-2 sm:block hidden" />
        {t("add to cart")}
      </button>
    </div>
  )
}

export default ProductCard
