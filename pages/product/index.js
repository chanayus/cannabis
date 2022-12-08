import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Header from "../../components/product/Header"
import { useTranslation } from "react-i18next"

const ProductDetail = () => {
  const { t } = useTranslation(["common"])

  return (
    <>
      <Header t={t} />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "nav"])),
    },
  }
}

export default ProductDetail
