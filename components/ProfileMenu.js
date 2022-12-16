import NextLink from "./NextLink"
import { MdOutlineReceiptLong } from "react-icons/md"
import { AiOutlineUser } from "react-icons/ai"
import { useRouter } from "next/router"
import { BiChevronRight } from "react-icons/bi"
import { useState } from "react"
import { m as motion } from "framer-motion"

const ProfileMenu = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const { pathname } = useRouter()
  const ActiveMenu = <motion.div layoutId="underline" className="profile-menu-active w-full h-full absolute left-0 top-0 z-[-1]"></motion.div>

  return (
    <aside
      className={`lg:transition-none transition-transform lg:translate-x-[0] ${
        mobileOpen ? "" : "translate-x-[-105%]"
      } bg-green rounded-lg pb-6 w-full max-w-[285px] h-[70vh] max-h-[530px] lg:translate-y-[0] translate-y-[-50%] z-20 lg:sticky fixed lg:top-[90px] top-1/2 text-white`}
    >
      <section layout className="hide-scroll-bar overflow-y-scroll h-[70vh]">
        <h3 className="font-bold text-xl flex items-center p-6">
          <MdOutlineReceiptLong size="2rem" className="mr-2" />
          My Order
        </h3>
        <NextLink href="/profile/myorder" className="py-4 block p-6 relative">
          My Order
          {pathname === "/profile/myorder" && ActiveMenu}
        </NextLink>
        <NextLink href="/profile/productStatus" className="py-4 block p-6 relative">
          Check product status
          {pathname === "/profile/productStatus" && ActiveMenu}
        </NextLink>

        <h3 className="font-bold text-xl flex items-center p-6">
          <AiOutlineUser size="2rem" className="mr-2" />
          Manage Account
        </h3>
        <NextLink href="/" className="py-4 block p-6 relative">
          Personal Information
          {pathname === "/profile" && ActiveMenu}
        </NextLink>
        <NextLink href="/" className="py-4 block p-6 relative">
          Address Management
          {pathname === "/profile" && ActiveMenu}
        </NextLink>
        <NextLink href="/" className="py-4 block p-6 relative">
          Payment Options
          {pathname === "/profile" && ActiveMenu}
        </NextLink>
        <NextLink href="/" className="py-4 block p-6 relative">
          Favorite
          {pathname === "/profile" && ActiveMenu}
        </NextLink>
      </section>

      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden block absolute top-1/2 right-[-17px] translate-y-[-50%] bg-green rounded-full"
      >
        <BiChevronRight size="2.25rem" className="pl-2" />
      </button>
    </aside>
  )
}

export default ProfileMenu
