import { BiChevronLeft } from "react-icons/bi"

const PrevArrow = ({ onClick }) => {
  return (
    <button onClick={onClick} className="z-10 rounded-lg bg-white dark:bg-gray w-fit absolute shadow-xl translate-y-[-50%] top-[40%] left-[1%]">
      <BiChevronLeft size="2.5rem" className="opacity-80" />
    </button>
  )
}

export default PrevArrow
