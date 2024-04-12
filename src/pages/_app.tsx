// import { PrismicPreview } from '@prismicio/next'
import { PrismicProvider } from '@prismicio/react'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { ToasterComponent } from '../components/Partials/ToasterComponent'
import { GlobalContextProvider } from '../context/GlobalContextProvider'
import { Header } from '../components/Header'
import Footer from '../components/Footer'
import { MenuHamburguer } from '../components/Partials/MenuHamburguer'
import { DefaultSeo } from 'next-seo'
import 'swiper/css/bundle'
import '../styles/index.scss'
import { QueryClient, QueryClientProvider } from 'react-query'

export default function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <DefaultSeo
        title="PCS UFPA"
        description="PET Interdisciplinar Conexões de Saberes"
        canonical="https://vercel.app/"
        openGraph={{
          url: 'https://vercel.app/',
          title: 'PCS UFPA',
          description: 'PET Interdisciplinar Conexões de Saberes',
          images: [
            {
              url: '/img/seo.png',
              width: 1200,
              height: 627,
              alt: 'PCS UFPA',
              type: 'image/png',
            },
          ],
          siteName: 'PCS UFPA',
        }}
      />
      <GlobalContextProvider>
        <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
          <Header />
          <Component {...pageProps} />
          <Footer />
          <ToasterComponent />
        </PrismicProvider>
      </GlobalContextProvider>
      <MenuHamburguer />
    </QueryClientProvider>
  )
}
