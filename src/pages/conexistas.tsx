import type { NextPage } from 'next'
import { client } from '../services/prismicClient'
import Layout from '../components/Layouts/Layout'
import { useQuery } from 'react-query'
import { Icon } from '@iconify/react'
import { ConexistasDocument } from '../../.slicemachine/prismicio'
import { Conexistakeleton } from '../components/Partials/Conexistakeleton'

const Page: NextPage = () => {
  const query = useQuery('getConexistas', () => client.getSingle('conexistas'))

  return (
    <Layout>
      <div>
        <h1>
          Muitos de nossos conexistas seguiram diversas carreiras, e se tornaram
          grandes profissionais em suas áreas, buscando sempre o melhor para o
          mundo e para as pessoas.
        </h1>
        {query.isLoading && (
          <div>
            <Conexistakeleton />
            <Conexistakeleton />
            <Conexistakeleton />
            <Conexistakeleton />
          </div>
        )}
        <div className="mt-5 border-t">
          <h2>Conexistas</h2>
          {query.data?.data.conexista.map((conexista) => {
            if (conexista.ativo)
              return <Conexista {...conexista} key={conexista?.nome} />
          })}
          <h2 className="mt-5 border-t">Ex-conexistas</h2>
          {query.data?.data.conexista.map((conexista) => {
            if (!conexista.ativo)
              return <Conexista {...conexista} key={conexista?.nome} />
          })}
        </div>
      </div>
    </Layout>
  )
}

function Conexista(conexista: ConexistasDocument['data']['conexista'][0]) {
  return (
    <div className="border-b pb-2 mb-2">
      <div className="flex items-center gap-5 flex-col md:flex-row">
        <div
          className="bg-cover rounded-full aspect-square w-40 bg-center"
          style={{ backgroundImage: `url(${conexista?.foto.url})` }}
        />
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center md:gap-2 flex-wrap justify-center">
            <div className="flex items-center gap-2">
              <Icon icon="mdi:account" className="text-xl text-zinc-500" />
              <span>{conexista?.nome}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon
                icon="mdi:graduation-cap"
                className="text-xl text-zinc-500"
              />
              <span className="text-sm text-zinc-500">{conexista?.curso}</span>
            </div>
          </div>
          <p className="text-sm text-zinc-700 text-center md:text-start">
            {conexista?.sobre}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page
