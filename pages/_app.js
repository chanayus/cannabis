import "../styles/globals.css"
import { appWithTranslation } from "next-i18next"

import { ThemeProvider } from "next-themes"
import Layout from "../components/Layout"
import Head from "next/head"
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="data-theme">
      <Head>
        <title>Cannabis</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
