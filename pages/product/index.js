import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Header from "../../components/product/Header";
import useTranslation from "../../hooks/useTranslation";

gsap.registerPlugin(ScrollTrigger);

const ProductDetail = () => {
  const { t } = useTranslation(["common"]);

  return (
    <>
      <Header t={t} />
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "nav"])),
    },
  };
}

export default ProductDetail;
