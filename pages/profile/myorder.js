import { useState, useEffect } from "react"
import NextLink from "../../components/NextLink"
import { BiChevronRight, BiChevronLeft } from "react-icons/bi"
import ReactPaginate from "react-paginate"

const MyOrder = () => {
  const data = [...new Array(30).keys()]
  const [currentPage, setCurrentPage] = useState(0)

  const dataPerPage = 5
  const pagesVisited = currentPage * dataPerPage
  const totalPage = Math.ceil(data.length / dataPerPage)

  const changePage = ({ selected }) => {
    setCurrentPage(() => selected)
  }

  useEffect(() => {
    window.scroll(0, 0)
  },[currentPage])

  return (
    <main className="w-full">
      <h3 className="font-bold text-2xl">Recent orders</h3>
      {/* Table Desktop */}
      <table className="w-full mt-4 sm:table hidden table-auto">
        <thead className="border-b  border-gray-white dark:border-gray bg-body-light dark:bg-body-dark sticky z-10 xl:top-[4.6rem] top-[66px]">
          <tr>
            <th className="text-left">Purchase order number</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(pagesVisited, pagesVisited + dataPerPage).map((item, index) => (
            <tr key={`product-item-${index}`} className="border-b border-gray-white dark:border-gray">
              <td className="text-green text-lg">{`PWB1060214589_${item}`}</td>
              <td className="text-lg text-center">28-11-2022 17:11</td>
              <td>
                <div className="flex items-center flex-col">
                  <img src="/images/products/1.png" alt="product-img" width={100} className="lg:w-[4.3rem] w-16" />
                  <div className="text-center">
                    <h4 className="text-lg font-bold">Strawberry Kush_{item}</h4>
                    <p>earthy, sweet, floral</p>
                  </div>
                </div>
              </td>
              <td className="relative">
                <div className="text-center font-bold text-2xl">฿54000</div>

                <div className="flex justify-end text-orange items-center mt-8 absolute right-0 bottom-[1.25rem]">
                  <NextLink href="/seeDetails">See Details</NextLink>
                  <BiChevronRight size="1.5rem" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Table Mobile */}
      <section className="mt-10 ">
        {data.slice(pagesVisited, pagesVisited + dataPerPage).map((item, index) => (
          <div key={`mobile-product-item-${index}`} className="w-full md:px-4 py-6 sm:hidden block border-b border-gray-white dark:border-gray">
            <div className="flex items-center">
              <img src="/images/products/1.png" alt="product-img" width={65} className="w-10" />
              <div className="ml-4">
                <h4 className="text-xl font-bold">Strawberry Kush_{item}</h4>
                <p>earthy, sweet, floral</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-lg my-4 leading-[1.2]">
              <p>Order Number</p>
              <p className="text-green">{`PWB1060214589_${item}`}</p>
            </div>
            <div className="flex items-center justify-between text-lg my-4">
              <p>Price</p>
              <p className="text-green">฿540/3G</p>
            </div>
            <div className="flex items-center justify-between text-lg my-4">
              <p>Quantity</p>
              <div className="bg-green text-base py-1 px-2 rounded w-fit text-white font-bold">3G</div>
            </div>
            <div className="flex items-center justify-between text-lg my-4">
              <p>Total</p>
              <p className=" text-orange font-bold text-xl">฿540</p>
            </div>
            <div className="flex justify-end text-orange  items-center">
              <NextLink href="/seeDetails">See Details</NextLink>
              <BiChevronRight size="1.5rem" />
            </div>
          </div>
        ))}
      </section>

      <ReactPaginate
        previousLabel={<BiChevronLeft size="2rem" />}
        containerClassName={"w-full sm:flex hidden justify-center items-center gap-2 select-none mt-8"}
        pageClassName="page-item"
        activeClassName="page-item-active"
        nextLabel={<BiChevronRight size="2rem" />}
        pageCount={totalPage}
        onPageChange={changePage}
      />
      <div className="sm:hidden flex items-center justify-center mt-8">
        <button disabled={currentPage === 0} onClick={() => setCurrentPage((prev) => prev - 1)}>
          <BiChevronLeft size="2rem" />
        </button>
        <div className="w-10 p-2 rounded-lg text-center border mx-4 font-bold">{currentPage+1}</div>
        <button disabled={currentPage === totalPage-1} onClick={() => setCurrentPage((prev) => prev + 1)}>
          <BiChevronRight size="2rem" />
        </button>
      </div>
    </main>
  )
}

export default MyOrder
