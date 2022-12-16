import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Header from "../../components/product/Header"
import { useTranslation } from "react-i18next"
import Terpene from "../../components/product/Terpene"
import Feature from "../../components/product/Feature"
import Review from "../../components/product/Review"
import Slider from "react-slick"
import ProductCard from "../../components/ProductCard"
import NextArrow from "../../components/slide/NextArrow"
import PrevArrow from "../../components/slide/PrevArrow"

const ProductDetail = () => {
  const { t } = useTranslation(["common"])

  const reviewData = [...new Array(20)].map((value, index) => {
    return {
      username: `User ${index}`,
      date: "30/11/22",
      rating: Math.floor(Math.random() * 5) + 1,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    }
  })

  const slideSettings = {
    infinite: true,
    centerMode: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "relative",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  return (
    <>
      <Header t={t} />
      <div className="container">
        <Terpene t={t} />
        <Feature t={t} />
        <Review t={t} reviewData={reviewData} />
        <section className="mt-8">
          <h4 className="text-green font-semibold text-2xl">Cannabis</h4>
          <h2 className="font-bold text-5xl my-2 ">Featured products</h2>
          <p className="text-xl lg:mb-8">Choose your favorite strains. Prices will not calculated on checkout.</p>
          <Slider {...slideSettings}>
            {[...new Array(16)].map((item, index) => (
              <div key={index} className="px-2">
                <ProductCard t={t} extraStyle="mx-auto" />
              </div>
            ))}
          </Slider>
        </section>
      </div>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "nav"])),
    },
  }
}

export default ProductDetail
