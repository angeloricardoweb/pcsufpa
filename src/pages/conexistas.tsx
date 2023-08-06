import type { NextPage } from 'next'
import { client } from '../services/prismicClient'
import Layout from '../components/Layouts/Layout'
import { useQuery } from 'react-query'

const Page: NextPage = () => {
  const { data } = useQuery('getConexistas', async () => {
    await client.getSingle('conexistas')
  })
  console.log(data)

  return (
    <Layout>
      <div className="hover mb-2 cursor-pointer group">Conexistas</div>
    </Layout>
  )
}

export default Page
