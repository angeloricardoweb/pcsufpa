import type { NextPage } from 'next'
import { client } from '../services/prismicClient'
import Layout from '../components/Layouts/Layout'
import { useQuery } from 'react-query'
import CardPost from '../components/Partials/CardPost'

const Page: NextPage = () => {
  const { data: posts, isLoading } = useQuery('post_all_events', () =>
    client.getAllByType('post')
  )

  return (
    <Layout>
      <div className="hover mb-2 cursor-pointer group">Eventos</div>
      {posts?.filter(post => post.data.categoria === 'Evento').map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
    </Layout>
  )
}

export default Page
