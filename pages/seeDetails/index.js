import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "react-i18next"

const SeeDetail = () => {
  const { t } = useTranslation(["common"])

  return (
    <main className="container mt-28">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-green">See Details</h2>
        <p className="text-2xl mt-4">Details of the product you ordered</p>
      </div>
      {/* Table Desktop */}
      <table className="w-full mt-10 sm:table hidden table-auto">
        <thead className="border-b border-gray-white dark:border-gray">
          <tr className="py-4">
            <th className="text-left">PWB1060214589</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {[...new Array(3)].map((item, index) => (
            <tr key={`product-item-${index}`} className="border-b border-gray-white dark:border-gray">
              <td>
                <div className="flex items-center">
                  <img src="/images/products/1.png" alt="product-img" width={100} className="lg:w-[4.3rem] w-16" />
                  <div className="ml-4">
                    <h4 className="text-xl font-bold">Strawberry Kush</h4>
                    <p>earthy, sweet, floral</p>
                  </div>
                </div>
              </td>
              <td className="text-green text-2xl text-center">฿540/3G</td>
              <td>
                <div className="bg-green py-2 px-4 rounded-lg mx-auto w-fit font-bold text-white">3G</div>
              </td>
              <td className="text-center text-orange font-bold text-2xl">฿540</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Table Mobile */}
      <section className="mt-10 ">
        {[...new Array(3)].map((item, index) => (
          <div key={`mobile-product-item-${index}`} className="w-full px-4 py-6 sm:hidden block border-b border-gray-white dark:border-gray">
            <div className="flex items-center">
              <img src="/images/products/1.png" alt="product-img" width={65} className="w-10" />
              <div className="ml-4">
                <h4 className="text-xl font-bold">Strawberry Kush</h4>
                <p>earthy, sweet, floral</p>
              </div>
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
          </div>
        ))}
      </section>
    </main>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "nav"])),
    },
  }
}

export default SeeDetail
