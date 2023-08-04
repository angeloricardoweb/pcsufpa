import type { NextPage } from 'next'
import { client } from '../services/prismicClient'
import useSWR from 'swr'
import { ResumePostSkeleton } from '../components/Partials/ResumePostSkeleton'

const Home: NextPage = () => {
  const { data: posts, isLoading } = useSWR('post_all', () =>
    client.getAllByType('post')
  )

  console.log(posts)

  if (isLoading)
    return (
      <div>
        <ResumePostSkeleton />
        <ResumePostSkeleton />
        <ResumePostSkeleton />
        <ResumePostSkeleton />
        <ResumePostSkeleton />
      </div>
    )

  return (
    <div>
      {posts?.map((post) => (
        <div className="hover mb-2 cursor-pointer group" key={post.id}>
          <div>
            <div className="grid grid-cols-6 gap-2 items-center">
              <div className="col-span-4">
                <small>
                  {post.data.autor} -{' '}
                  {new Intl.DateTimeFormat('pt-BR', {
                    dateStyle: 'medium',
                  }).format(new Date(post.last_publication_date))}
                </small>
                <h2 className="text-2xl font-bold group-hover:text-blue-900 transition-all">
                  {post.data.titulo}
                </h2>
                <p className="font-light">{post.data.resumo}...</p>
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
      ))}
    </div>
  )
}

export default Home
