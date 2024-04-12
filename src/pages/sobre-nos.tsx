import type { NextPage } from 'next'
import { client } from '../services/prismicClient'
import Layout from '../components/Layouts/Layout'
import { useQuery } from 'react-query'
import ContentRichText from '../components/Prismic/ContentRichText'

const Page: NextPage = () => {
  const { data: sobre_nos, isLoading } = useQuery('get_sobre_nos', () =>
    client.getSingle('sobre_nos')
  )

  return (
    <Layout>
      <div className="hover mb-2 cursor-pointer group">Sobre nós</div>
      <div>
        <img src={sobre_nos?.data.banner.url as string} alt="banner" />
        <article className='mt-5'>
          <ContentRichText data={sobre_nos?.data.conteudo} />
        </article>
      </div>
    </Layout>
  )
}

export default Page
