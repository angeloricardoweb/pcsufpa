import type { NextPage } from 'next'
import { client } from '../services/prismicClient'
import Layout from '../components/Layouts/Layout'
import { useQuery } from 'react-query'

const Page: NextPage = () => {
  const { data: acervo, isLoading } = useQuery('get_acervo', () =>
    client.getSingle('acervo')
  )

  return (
    <Layout>
      <div className="hover mb-2 cursor-pointer group">Acervo</div>
      <div className='grid md:grid-cols-2 gap-3'>
        {
          acervo?.data.lista.map((item) => (
            <div key={item.titulo} className="border p-2 rounded">
              <div
                className="bg-cover bg-center w-full aspect-[3/4]"
                style={{
                  backgroundImage: `url(${item.imagem.url})`,
                }}
              />
              <div>
                <h2 className="font-bold">
                  {item.titulo}
                </h2>
                <p className="font-light font-garamond">{item.descricao}</p>
                <a href={item?.link_para_baixar_ou_visualizar as string} className='hover:underline' target='_blank' rel="noreferrer" >
                  <span className="text-brand-blue">Baixar</span>
                </a>
              </div>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

export default Page
