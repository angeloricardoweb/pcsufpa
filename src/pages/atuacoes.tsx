import type { NextPage } from 'next'
import { client } from '../services/prismicClient'
import useSWR from 'swr'
import Layout from '../components/Layouts/Layout'

const Page: NextPage = () => {

  return (
    <Layout>
      <div className="hover mb-2 cursor-pointer group">Eventos</div>
    </Layout>
  )
}

export default Page
