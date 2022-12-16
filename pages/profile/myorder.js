import React from "react"
import NextLink from "../../components/NextLink"
import { BiChevronRight } from "react-icons/bi"

const MyOrder = () => {
  return (
    <main className="w-full">
      <h3 className="font-bold text-2xl">Recent orders</h3>
      {/* Table Desktop */}
      <table className="w-full mt-4 sm:table hidden table-auto">
        <thead className="border-b border-gray-white dark:border-gray bg-body-light sticky z-10 lg:top-[7.5vh] top-[65px]">
          <tr className="py-4 ">
            <th className="text-left">Purchase order number</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {[...new Array(30)].map((item, index) => (
            <tr key={`product-item-${index}`} className="border-b border-gray-white dark:border-gray">
              <td className="text-green text-lg">PWB1060214589</td>
              <td className="text-lg text-center">28-11-2022 17:11</td>
              <td>
                <div className="flex items-center flex-col">
                  <img src="/images/products/1.png" alt="product-img" width={100} className="lg:w-[4.3rem] w-16" />
                  <div className="text-center">
                    <h4 className="text-lg font-bold">Strawberry Kush</h4>
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
        {[...new Array(3)].map((item, index) => (
          <div key={`mobile-product-item-${index}`} className="w-full md:px-4 py-6 sm:hidden block border-b border-gray-white dark:border-gray">
            <div className="flex items-center">
              <img src="/images/products/1.png" alt="product-img" width={65} className="w-10" />
              <div className="ml-4">
                <h4 className="text-xl font-bold">Strawberry Kush</h4>
                <p>earthy, sweet, floral</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-lg my-4 leading-[1.2]">
              <p>Order Number</p>
              <p className="text-green">PWB1060214589</p>
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
    </main>
  )
}

export default MyOrder
