import type { NextPage } from 'next'
import { client } from '../services/prismicClient'
import useSWR from 'swr'

const Page: NextPage = () => {

  return (
    <div className="py-5">
      <div className="hover mb-2 cursor-pointer group">Acervo</div>
    </div>
  )
}

export default Page
