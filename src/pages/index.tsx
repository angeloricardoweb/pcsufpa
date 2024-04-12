import type { NextPage } from 'next'
import { client } from '../services/prismicClient'
import { ResumePostSkeleton } from '../components/Partials/ResumePostSkeleton'
import Layout from '../components/Layouts/Layout'
import Link from 'next/link'
import { useQuery } from 'react-query'
import slugify from 'slugify'
import CardPost from '../components/Partials/CardPost'

const Home: NextPage = () => {
  const { data: posts, isLoading } = useQuery('post_all', () =>
    client.getAllByType('post', {
      pageSize: 10,
    })
  )

  if (isLoading)
    return (
      <Layout>
        <ResumePostSkeleton />
        <ResumePostSkeleton />
        <ResumePostSkeleton />
        <ResumePostSkeleton />
        <ResumePostSkeleton />
      </Layout>
    )

  return (
    <Layout>
      {posts?.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
    </Layout>
  )
}

export default Home
