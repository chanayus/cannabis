import { useState, useEffect, useRef } from "react"
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5"
import { motion, AnimatePresence } from "framer-motion"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsap from "gsap"
import NextLink from "../NextLink"

gsap.registerPlugin(ScrollTrigger)

const TopShelf = ({ t }) => {
  const [slideIndex, setSlideIndex] = useState(1)
  const [isUpdate, setIsUpdate] = useState(false)

  const containerRef = useRef(null)
  const slideData = [
    {
      name: "Strawberry Kush",
      type: "earthy, sweet, floral",
      image: "1.png",
    },
    {
      name: "Strawberry Kush 2",
      type: "earthy, sweet, floral",
      image: "2.png",
    },
    {
      name: "Strawberry Kush 3",
      type: "earthy, sweet, floral",
      image: "3.png",
    },
  ]

  const nextSlide = () => {
    if (slideIndex + 1 <= slideData.length) {
      setIsUpdate(true)
      setTimeout(() => setSlideIndex((prev) => prev + 1), 100)
    }
  }

  const prevSlide = () => {
    if (slideIndex - 1 >= 1) {
      setIsUpdate(true)
      setTimeout(() => setSlideIndex((prev) => prev - 1), 100)
    }
  }

  useEffect(() => {
    const animateMediaQuery = gsap.matchMedia()
    const trigger = { trigger: containerRef.current, start: "20% 50%", end: "+=65%" }

    animateMediaQuery.add("(max-width: 1024px)", () => {
      gsap.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.65, scrollTrigger: trigger })
      gsap.fromTo("#top-shelf-img", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.65, delay: 0.25, scrollTrigger: trigger })
      gsap.fromTo("#top-slide-control", { opacity: 0, y: 25 }, { opacity: 1, y: 0, delay: 0.1, duration: 0.65, scrollTrigger: trigger })
      gsap.fromTo("#top-text-desc", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.65, scrollTrigger: trigger })
    })

    animateMediaQuery.add("(min-width: 1025px)", () => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.65, scrollTrigger: { ...trigger, toggleActions: "play reverse play reverse" } }
      )
      gsap.fromTo(
        "#top-shelf-img",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.65, delay: 0.25, scrollTrigger: { ...trigger, toggleActions: "play reverse play reverse" } }
      )
      gsap.fromTo(
        "#top-slide-control",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, delay: 0.1, duration: 0.65, scrollTrigger: { ...trigger, toggleActions: "play reverse play reverse" } }
      )
      gsap.fromTo(
        "#top-text-desc",
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.65, scrollTrigger: { ...trigger, toggleActions: "play reverse play reverse" } }
      )
    })
  }, [])

  return (
    <section className="relative mt-28 overflow-hidden" ref={containerRef}>
      <div className="container-no-padding grid items-center lg:grid-cols-2 relative z-10 ">
        <div id="top-text-desc" className="p-8 lg:px-10 lg:bg-transparent bg-green relative">
          <p className="text-white mb-4 text-xl">Top Shelf</p>
          <h3 className="text-white font-bold text-5xl mb-2">Cannabis 10 breed</h3>
          <h3 className="text-orange font-bold text-5xl mb-6">Top Shelf</h3>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam ducimus doloribus nisi incidunt sed quas totam omnis eum, eos
            exercitationem temporibus animi illum nulla illo enim, laboriosam ipsum deserunt!
          </p>
          <NextLink href="/">
            <button className="px-8 py-3 bg-orange my-6 text-white rounded-lg">{t("shop now")}</button>
          </NextLink>
          <div className="w-[2px] h-[75%] bg-white ml-2 absolute xl:block hidden top-[46%] translate-y-[-50%] left-[0] opacity-50"></div>
          <div className="flex items-center text-white">
            <AnimatePresence>
              {!isUpdate && (
                <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }}>
                  {slideIndex >= 10 ? slideIndex : `0${slideIndex}`}
                </motion.p>
              )}
            </AnimatePresence>
            <div className="w-2/3 h-[2px] bg-white ml-2"></div>
          </div>
        </div>

        <div className="p-8 relative w-full h-full">
          <div className="w-full px-6 absolute flex justify-end left-0">
            <NextLink href="/" className="text-orange  ">
              {t("view all")}
            </NextLink>
          </div>

          <div
            id="top-slide-control"
            className="bg-white dark:bg-black p-4 rounded-lg flex absolute md:w-[70%] w-[90%] left-1/2 translate-x-[-50%] md:bottom-8 bottom-0 z-10"
          >
            <div className="w-full mr-6">
              <AnimatePresence>
                {!isUpdate && (
                  <>
                    <div className="flex justify-between mb-2">
                      <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }}>
                        {slideIndex >= 10 ? slideIndex : `0${slideIndex}`}
                      </motion.p>
                      <p>Next Slide</p>
                    </div>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="font-bold text-2xl text-green"
                    >
                      {slideData[slideIndex - 1].name}
                    </motion.h3>
                    <motion.h5
                      onAnimationComplete={() => {
                        setIsUpdate(false)
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-lg text-green"
                    >
                      {slideData[slideIndex - 1].type}
                    </motion.h5>
                  </>
                )}
              </AnimatePresence>
            </div>
            <div>
              <button onClick={() => nextSlide()} className="border p-2 mb-2 border-green text-green">
                <IoChevronUpSharp size="1.5rem" />
              </button>
              <button onClick={() => prevSlide()} className="border p-2 border-green text-white bg-green">
                <IoChevronDownSharp size="1.5rem" />
              </button>
            </div>
          </div>
          <AnimatePresence>
            {!isUpdate && (
              <motion.div
                className="mx-auto w-[13rem] h-[22rem] "
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <img
                  id="top-shelf-img"
                  src={`/images/products/${slideData[slideIndex - 1].image}`}
                  alt="product-image"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {/* Background */}
      <div className="w-1/2 h-full absolute lg:block hidden top-0 bg-green"></div>
      <div className="w-1/2 h-full absolute lg:block hidden top-0 right-0 bg-[#EDEDED] dark:bg-transparent"></div>
    </section>
  )
}

export default TopShelf
