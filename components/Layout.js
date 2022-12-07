import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Footer = dynamic(() => import("./Footer"), {
  ssr: false,
})

const Layout = ({ children }) => {
  const [firstRender, setFirstRender] = useState(true)
  const router = useRouter()

  useEffect(() => {
    window.history.scrollRestoration = "manual"
    if (firstRender) {
      window.scroll(0, 0)
      setFirstRender(false)
    } else {
      setTimeout(() => {
        window.scroll(0, 0)
      }, 350)
    }
    return () => {
      clearTimeout(
        setTimeout(() => {
          window.scroll(0, 0)
        }, 350)
      )
    }
  }, [router.pathname])

  return (
    <>
      <Navbar />
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          key={router.pathname}
          className="w-full min-h-[calc(100vh-200px)] py-[7.5vh] md:pt-[74px] pt-[65px]"
        >
          {children}
        </motion.div>
      <Footer />
    </>
  )
}

export default Layout
