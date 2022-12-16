import dynamic from "next/dynamic"
import { LazyMotion, m as motion } from "framer-motion"
import Navbar from "../components/Navbar"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Footer = dynamic(() => import("./Footer"), {
  ssr: false,
})

const ProfileMenu = dynamic(() => import("./ProfileMenu"), {
  ssr: false,
})

const motionFeatures = () => import("../functions/motion/motionFeature").then((res) => res.default)

const Layout = ({ children }) => {
  const router = useRouter()

  const hideNavPage = ["/login", "/register"]
  const isProfilePage = router.pathname.search("/profile") !== -1

  useEffect(() => {
    window.history.scrollRestoration = "manual"
    window.scroll(0, 0)
  }, [router.pathname])

  return (
    <>
      <LazyMotion features={motionFeatures}>
        {hideNavPage.includes(router.pathname) ? <></> : <Navbar />}

        {isProfilePage ? (
          <main className="container mt-[3rem] flex w-full min-h-[calc(100vh-200px)] py-[7.5vh] md:pt-[74px] pt-[65px]">
            <ProfileMenu />
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              key={router.pathname}
              className="lg:px-4 w-full"
            >
              {children}
            </motion.div>
          </main>
        ) : (
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
        )}
      </LazyMotion>
      {hideNavPage.includes(router.pathname) ? <></> : <Footer />}
    </>
  )
}

export default Layout
