import { useState } from "react"
import { FaRegSmile, FaStar } from "react-icons/fa"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import useIsMounted from "../../hooks/useIsMounted"

const Review = ({ reviewData }) => {
  const [reviewerPage, setReviewerPage] = useState(0)
  const isMount = useIsMounted()

  const avgRating = isMount && reviewData.reduce((accumulator, item) => accumulator + item.rating, 0) / reviewData.length

  return (
    <section className="w-full h-full flex lg:flex-row flex-col lg:space-x-6 mt-8">
      <div className="p-6 rounded-lg bg-white dark:bg-black lg:w-[32%]">
        <div className="w-44 h-44 border-8 border-green rounded-full flex mx-auto justify-center items-center flex-col">
          <p className="text-2xl font-bold">{isMount && avgRating.toFixed(1)}</p>
          <p>({reviewData.length} Review)</p>
          <div className="mt-1 flex space-x-1">
            <FaStar color="#F2B735" size="1.1rem" />
            <FaStar color="#F2B735" size="1.1rem" />
            <FaStar color="#F2B735" size="1.1rem" />
            <FaStar color="#F2B735" size="1.1rem" />
            <FaStar color="#F2B735" size="1.1rem" />
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between bg-body-light dark:bg-body-dark  p-2 rounded-lg">
            <FaRegSmile size="1.375rem" color="#ED744A" />
            <div className="flex-1 pl-4 font-medium">Smell</div>
            <div>100%</div>
          </div>
          <div className="flex items-center justify-between bg-body-light dark:bg-body-dark  p-2 rounded-lg mt-2">
            <FaRegSmile size="1.375rem" color="#ED744A" />
            <div className="flex-1 pl-4 font-medium">Drunkenness</div>
            <div>100%</div>
          </div>
          <div className="flex items-center justify-between bg-body-light dark:bg-body-dark  p-2 rounded-lg mt-2">
            <FaRegSmile size="1.375rem" color="#ED744A" />
            <div className="flex-1 pl-4 font-medium">Quality</div>
            <div>100%</div>
          </div>
          <div className="flex items-center justify-between bg-body-light dark:bg-body-dark  p-2 rounded-lg mt-2">
            <FaRegSmile size="1.375rem" color="#ED744A" />
            <div className="flex-1 pl-4 font-medium">Price</div>
            <div>100%</div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="p-6 rounded-lg bg-white dark:bg-black w-full flex-1 flex flex-col lg:mt-0 mt-4">
          <h3 className="font-bold text-2xl mb-4">Comments ({reviewData.length})</h3>
          {isMount && reviewData.length ? (
            reviewData.slice(reviewerPage * 2, reviewerPage * 2 + 2).map((item, index) => (
              <div key={index}>
                <div className="bg-body-light dark:bg-body-dark rounded-lg p-4 my-3">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-white dark:border-gray">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img src="/images/user.png" alt="user-profile" width={40} height={40} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 ml-4">
                      <h4 className="font-bold text-xl">{item.username}</h4>
                      <p className="text-sm opacity-75">{item.date}</p>
                    </div>
                    <div className="flex space-x-1">
                      {[...new Array(item.rating)].map((value, index) => (
                        <FaStar color="#F2B735" size="1.1rem" key={`star-${item.username}-${index}`} />
                      ))}
                    </div>
                  </div>
                  <div className="pt-2">{item.desc}</div>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-xl opacity-70 lg:mb-8">No Reviewer</p>
            </div>
          )}

          {reviewData.length ? (
            <div className="flex justify-center space-x-8 mt-6">
              <button
                onClick={() => setReviewerPage((prev) => prev - 1)}
                disabled={reviewerPage === 0}
                className="w-14 h-14 bg-green-200 text-[#1C8151] rounded-full"
              >
                <BiChevronLeft size="2.5rem" />
              </button>
              <button
                onClick={() => setReviewerPage((prev) => prev + 1)}
                disabled={reviewerPage === reviewData.length / 2 - 1}
                className="w-14 h-14 bg-green rounded-full text-white"
              >
                <BiChevronRight size="2.5rem" />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default Review
