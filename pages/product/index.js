import Link from "next/link";

import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Header from "../../components/product/Header";

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
