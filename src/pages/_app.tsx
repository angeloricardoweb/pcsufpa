// import { PrismicPreview } from '@prismicio/next'
import { PrismicProvider } from '@prismicio/react'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import Modals from '../components/Modals'
import { BoxCookies } from '../components/Partials/BoxCookies'
import { ToasterComponent } from '../components/Partials/ToasterComponent'
import { GlobalContextProvider } from '../context/GlobalContextProvider'
import { Header } from '../components/Header'
import Footer from '../components/Footer'
import { MenuHamburguer } from '../components/Partials/MenuHamburguer'
import { DefaultSeo } from 'next-seo'
import 'swiper/css/bundle'
import '../styles/index.scss'
import { useEffect, useState } from 'react'
import Container from '../components/Partials/Container'
import { InnerHeader } from '../components/Partials/InnerHeader'
import { Sidebar } from '../components/Partials/Sidebar'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="PCS UFPA"
        description="___SiteDescription___    "
        canonical="https://vercel.app/"
        openGraph={{
          url: 'https://vercel.app/',
          title: 'PCS UFPA',
          description: '___SiteDescription___',
          images: [
            {
              url: '/img/seo.png',
              width: 1200,
              height: 627,
              alt: 'PCS UFPA',
              type: 'image/png',
            },
          ],
          siteName: 'gilmarcasepatentes.com.br',
        }}
        twitter={{
          handle: '@GilmarcaEPatentes',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <GlobalContextProvider>
        <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
          <Header />
          <Component {...pageProps} />
          <Footer />
          <BoxCookies />
          <Modals />
          <ToasterComponent />
        </PrismicProvider>
      </GlobalContextProvider>
      <MenuHamburguer />
    </>
  )
}
