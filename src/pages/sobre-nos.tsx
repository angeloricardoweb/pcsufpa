import type { NextPage } from 'next'
import { client } from '../services/prismicClient'
import Layout from '../components/Layouts/Layout'
import { useQuery } from 'react-query'
import ContentRichText from '../components/Prismic/ContentRichText'

const Page: NextPage = () => {
  const { data } = useQuery('getSobreNos', () => client.getSingle('sobre_nos'))

  if (!data)
    return (
      <Layout>
        <div className="flex flex-col gap-1">
          <div className="bg-zinc-200 h-40 w-full animate-pulse" />
          <div className="bg-zinc-200 h-6 w-full animate-pulse" />
          <div className="bg-zinc-200 h-6 w-full animate-pulse" />
          <div className="bg-zinc-200 h-6 w-full animate-pulse" />
          <div className="bg-zinc-200 h-6 w-full animate-pulse" />
          <div className="bg-zinc-200 h-6 w-full animate-pulse" />
          <div className="bg-zinc-200 h-6 w-full animate-pulse" />
        </div>
      </Layout>
    )

  return (
    <Layout>
      <div className="hover mb-2 cursor-pointer group">Sobre nós</div>
      <div className="w-full aspect-video mb-5">
        <img
          src={data?.data.banner.url as string}
          alt="banner"
          className="object-contain w-full"
        />
      </div>
      <ContentRichText data={data?.data.conteudo} />
    </Layout>
  )
}

export default Page
