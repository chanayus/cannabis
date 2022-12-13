import { RiMoonClearLine } from "react-icons/ri"
import { FaRegFrown, FaRegSmile, FaRegMeh, FaRegFlushed } from "react-icons/fa"

const Feature = () => {
  return (
    <section className="my-8">
      <div className="text-white w-full bg-red-500 bg-green mb-8 py-2 px-4 text-2xl font-bold rounded-lg">Other Features</div>
      <section className="w-full h-full flex lg:flex-row flex-col lg:space-x-6">
        <div className="p-6 rounded-lg bg-white dark:bg-black lg:w-[32%]">
          <h3 className="font-bold text-2xl mb-8">Tastes</h3>
          <div className="text-center mb-10">
            <div className="w-20 h-20 border border-green mx-auto mb-4 rounded-lg p-3">
              <img src="/icons/tastes/earthy.svg" alt="taste-icon" className="w-full h-full" />
            </div>
            <h4 className="text-lg font-bold ">Earthy</h4>
            <p>An earthy taste with dark flavor accents.</p>
          </div>
          <div className="text-center mb-10">
            <div className="w-20 h-20 border border-green mx-auto mb-4 rounded-lg p-3">
              <img src="/icons/tastes/citrus.svg" alt="taste-icon" className="w-full h-full" />
            </div>
            <h4 className="text-lg font-bold">Citrus</h4>
            <p>A fresh boost with a euphoric effect. Blow your mind!</p>
          </div>
          <div className="text-center mb-10">
            <div className="w-20 h-20 border border-green mx-auto mb-4 rounded-lg p-3">
              <img src="/icons/tastes/sweet.svg" alt="taste-icon" className="w-full h-full" />
            </div>
            <h4 className="text-lg font-bold">Sweet</h4>
            <p>A wonderful aroma that you will never get enough of.</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="p-6 rounded-lg bg-white dark:bg-black w-full flex-1 flex flex-col lg:mt-0 mt-4">
            <h3 className="font-bold text-2xl mb-8">Effects</h3>
            <div className="flex justify-evenly items-center h-full gap-6 flex-wrap">
              <div className="w-32 h-32 border-8 border-green rounded-full flex justify-center items-center flex-col">
                <FaRegSmile size="1.45rem" />
                <p>Euphoric</p>
              </div>
              <div className="w-32 h-32 border-8 border-green rounded-full flex justify-center items-center flex-col">
                <RiMoonClearLine size="1.45rem" />
                <p>Stoned</p>
              </div>
              <div className="w-32 h-32 border-8 border-green rounded-full flex justify-center items-center flex-col">
                <FaRegFlushed size="1.45rem" />
                <p>Anxiety</p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-lg bg-white dark:bg-black w-full flex-1 flex flex-col mt-4">
            <h3 className="font-bold text-2xl mb-8">Effects</h3>
            <div className="flex justify-evenly items-center h-full gap-6 flex-wrap">
              <div className="w-32 h-32 border-8 border-green rounded-full flex justify-center items-center flex-col">
                <FaRegMeh size="1.45rem" />
                <p>Stress</p>
              </div>
              <div className="w-32 h-32 border-8 border-green rounded-full flex justify-center items-center flex-col">
                <FaRegFrown size="1.45rem" />
                <p>Depression</p>
              </div>
              <div className="w-32 h-32 border-8 border-green rounded-full flex justify-center items-center flex-col">
                <FaRegFlushed size="1.45rem" />
                <p>Anxiety</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Feature
