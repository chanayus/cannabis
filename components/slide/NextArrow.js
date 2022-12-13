import { BiChevronRight } from "react-icons/bi"

const NextArrow = ({ onClick }) => {
  return (
    <button onClick={onClick} className="z-10 rounded-lg bg-white dark:bg-gray w-fit absolute shadow-xl translate-y-[-50%] top-[40%] right-[1%]">
      <BiChevronRight size="2.5rem" />
    </button>
  )
}

export default NextArrow
