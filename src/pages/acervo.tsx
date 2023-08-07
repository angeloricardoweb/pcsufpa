import type { NextPage } from 'next'
import { client } from '../services/prismicClient'
import Layout from '../components/Layouts/Layout'
import { useQuery } from 'react-query'
import { Icon } from '@iconify/react'

const Page: NextPage = () => {
  const { data } = useQuery('getAcervo', () => client.getSingle('acervo'))
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
      <div className="mb-2">
        <h1>{data.data.descricao}</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-5">
          {data.data.item.map((item) => (
            <a
              href={item.link as string}
              key={item.nome}
              target="_blank"
              rel="noreferrer"
            >
              <div className="bg-zinc-100 p-5 flex items-center justify-center flex-col h-full hover:bg-brand-green-100 transition-all group">
                <Icon
                  icon="pajamas:doc-symlink"
                  className="text-3xl text-zinc-500 group-hover:text-white transition-all"
                />
                <span className="text-sm text-center group-hover:text-white transition-all">
                  {item.nome}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Page
