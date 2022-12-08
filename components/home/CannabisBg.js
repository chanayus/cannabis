import useIsMounted from "../../hooks/useIsMounted"
import styled, { keyframes } from "styled-components"
import { useMemo } from "react"
import { useRouter } from "next/router"

const CannabisBg = (props) => {
  const { pathname } = useRouter()
  const isMounted = useIsMounted()
  const animateValueItems = useMemo(() => {
    const data = []
    ;[...new Array(95)].map(() => {
      data.push({
        x: Math.floor(Math.random() * 100),
        y: Math.floor(Math.random() * 100),
        rotate: Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1),
        rotateAnimRatio: Math.round(Math.random()) ? 1 : -1,
        scale: Math.random() * 1 + 0.1,
        delay: Math.floor(Math.random() * 15) + 0.2,
        duration: Math.floor(Math.random() * 50) + 40,
        snowOutline: Math.round(Math.random()),
      })
    })
    return [...data]
  }, [pathname])

  return (
    <>
      <div {...props}>
        {isMounted &&
          animateValueItems.map((item, index) => (
            <Cannabis
              key={`cannabis-${index}`}
              className="absolute origin-center will-change-transform"
              src="/images/home/cannabis.svg"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                rotate: `${item.rotate}deg`,
                scale: `${item.scale}`,
              }}
              delay={item.delay}
              rotateAnimRatio={item.rotateAnimRatio}
              duration={item.duration}
              rotate={item.rotate}
              alt="cannabis-item"
            />
          ))}
        {isMounted &&
          animateValueItems.map((item, index) => (
            <Snow
              key={`snow-${index}`}
              className={`absolute w-4 h-4 rounded-full border-white will-change-transform border-2 ${item.snowOutline ? "" : "bg-white"}`}
              style={{
                left: `${item.x}%`,
                top: `-5.5%`,
                rotate: `${item.rotate}deg`,
                scale: `${item.scale}`,
              }}
              delay={item.delay}
              duration={item.duration}
              rotate={item.rotate}
              alt="snow-item"
            ></Snow>
          ))}
      </div>
    </>
  )
}

const snowAnim = () => keyframes`
  0% {
    -webkit-transform: translateY(0vh);
  }
  100% {
    opacity :0;
    -webkit-transform: translateY(200vh);
  }
`

const cannabisAnim = (rotate, rotateAnimRatio) => keyframes`
  0% {
    -webkit-transform: translate(0, 0) rotate(${rotate}deg);
  }
  50% {
    -webkit-transform: translate(200px, ${200 * rotateAnimRatio}px) rotate(${rotate + 360 * rotateAnimRatio}deg);
  }
  100% {
    -webkit-transform: translate(0, 0) rotate(${rotate}deg);
  }
`

const Cannabis = styled.img`
  -webkit-animation: ${(props) => props.duration}s ${(props) => cannabisAnim(props.rotate, props.rotateAnimRatio)} 0s linear infinite;
`

const Snow = styled.div`
  -webkit-animation: ${(props) => props.duration}s ${snowAnim()} 0s linear infinite;
`

export default CannabisBg
