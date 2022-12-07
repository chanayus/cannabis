import { motion } from "framer-motion"
import useIsMounted from "../../hooks/useIsMounted"
const CannabisBg = (props) => {
  const isMounted = useIsMounted()
  const randomItems = () => {
    const data = []
    ;[...new Array(80)].map((item) => {
      data.push({
        x: Math.floor(Math.random() * 100),
        y: Math.floor(Math.random() * 100),
        rotate: Math.floor(Math.random() * 360),
        scale: Math.random() * 1 + 0.1,
        delay: Math.floor(Math.random() * 30) + 0.2,
        duration: Math.floor(Math.random() * 50) + 30,
        snowOutline: Math.round(Math.random()),
      })
    })
    return [...data]
  }

  return (
    <div {...props}>
      {isMounted &&
        randomItems().map((item, index) => (
          <motion.img
            key={`cannabis-${index}`}
            className="absolute origin-center will-change-transform"
            src="/images/home/cannabis.svg"
            initial={{ y: "0", opacity: 1, rotate: `${item.rotate}deg` }}
            animate={{ y: "400vh", opacity: 0, rotate: `${item.rotate + 360}deg` }}
            transition={{ ease: "linear", duration: item.duration, repeat: Infinity, delay: item.delay }}
            style={{
              left: `${item.x}%`,
              top: `-5.5%`,
              rotate: `${item.rotate}deg`,
              scale: `${item.scale}`,
            }}
            alt="cannabis-item"
          />
        ))}
      {isMounted &&
        randomItems().map((item, index) => (
          <motion.div
            key={`snow-${index}`}
            className={`absolute w-4 h-4 rounded-full border-white border-2 ${item.snowOutline ? "" : "bg-white"}`}
            initial={{ y: "0", opacity: 1, rotate: `${item.rotate}deg` }}
            animate={{ y: "400vh", opacity: 0, rotate: `${item.rotate + 360}deg` }}
            transition={{ ease: "linear", duration: item.duration, repeat: Infinity, delay: item.delay }}
            style={{
              left: `${item.x}%`,
              top: `-5.5%`,
              rotate: `${item.rotate}deg`,
              scale: `${item.scale}`,
            }}
            alt="snow-item"
          ></motion.div>
        ))}
    </div>
  )
}

export default CannabisBg
