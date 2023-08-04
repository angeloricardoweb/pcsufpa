import type { NextPage } from 'next'
import { client } from '../services/prismicClient'
import useSWR from 'swr'

const Page: NextPage = () => {
  const { data: posts, isLoading } = useSWR('post_all', () =>
    client.getAllByType('post')
  )

  console.log(posts)

  return (
    <div className="py-5">
      <div className="hover mb-2 cursor-pointer group">Conexistas</div>
    </div>
  )
}

export default Page
