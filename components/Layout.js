import dynamic from "next/dynamic"
import { LazyMotion, m as motion } from "framer-motion"
import Navbar from "../components/Navbar"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Footer = dynamic(() => import("./Footer"), {
  ssr: false,
})

const motionFeatures = () => import("../functions/motion/motionFeature").then((res) => res.default)

const Layout = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    window.history.scrollRestoration = "manual"
    window.scroll(0, 0)
  }, [router.pathname])

  return (
    <>
      <LazyMotion features={motionFeatures}>
        <Navbar />
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          key={router.pathname}
          className="w-full min-h-[calc(100vh-200px)] py-[7.5vh] md:pt-[74px] pt-[65px]"
        >
          {children}
        </motion.div>
      </LazyMotion>
      <Footer />
      {/* <div className="w-full min-h-[calc(100vh-200px)] py-[7.5vh] md:pt-[74px] pt-[65px]"> {children}</div> */}
    </>
  )
}

export default Layout
