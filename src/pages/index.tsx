import type { NextPage } from 'next'
import { client } from '../services/prismicClient'
import { ResumePostSkeleton } from '../components/Partials/ResumePostSkeleton'
import Layout from '../components/Layouts/Layout'
import Link from 'next/link'
import { useQuery } from 'react-query'

const Home: NextPage = () => {
  const { data: posts, isLoading } = useQuery('post_all', () =>
    client.getAllByType('post')
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
        <Link key={post.id} href={`/blog/${post.id}`}>
          <div className="hover mb-2 cursor-pointer group">
            <div>
              <div className="grid grid-cols-6 gap-2 items-center">
                <div className="col-span-4">
                  <small className='text-zinc-600'>
                    {post.data.autor} -{' '}
                    {new Intl.DateTimeFormat('pt-BR', {
                      dateStyle: 'medium',
                    }).format(new Date(post.first_publication_date))}
                  </small>
                  <h2 className="text-2xl font-bold group-hover:text-brand-green-100 transition-all">
                    {post.data.titulo}
                  </h2>
                  <p className="font-light font-garamond">{post.data.resumo}</p>
                </div>
                <div
                  className="col-span-2 bg-cover bg-center w-full aspect-[7/5]"
                  style={{
                    backgroundImage: `url(${post.data.thumbnail.url})`,
                  }}
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </Layout>
  )
}

export default Home
