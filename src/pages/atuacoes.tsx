import type { NextPage } from 'next'
import { client } from '../services/prismicClient'
import Layout from '../components/Layouts/Layout'
import { useQuery } from 'react-query'
import slugify from 'slugify'
import Link from 'next/link'

const Page: NextPage = () => {
  const { data: eixos, isLoading } = useQuery('get_eixos', () =>
    client.getAllByType('eixo')
  )

  return (
    <Layout>
      <div className="hover mb-2 cursor-pointer group">Áreas de atuação</div>
      {
        eixos?.map((eixo) => (
          <Link key={eixo.id} href={`/eixo/${eixo.id}/${slugify(eixo.data.titulo ?? '')}`}>
            <div className="hover mb-2 cursor-pointer group">
              <div >
                <div>
                  <h2 className="text-2xl font-bold group-hover:text-brand-blue transition-all">
                    {eixo.data.titulo}
                  </h2>
                  <p className="font-light font-garamond">{eixo.data.resumo}</p>
                </div>
              </div>
            </div>
          </Link>
        ))
      }
    </Layout>
  )
}

export default Page
