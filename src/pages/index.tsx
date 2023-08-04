import type { NextPage } from 'next'
import { client } from '../services/prismicClient'
import useSWR from 'swr'
import { ResumePostSkeleton } from '../components/Partials/ResumePostSkeleton'

const Home: NextPage = () => {
  const { data: posts, isLoading } = useSWR('post_all', () =>
    client.getAllByType('post')
  )

  console.log(posts)

  return (
    <div className="py-5">
      {isLoading && (
        <div>
          <ResumePostSkeleton />
          <ResumePostSkeleton />
          <ResumePostSkeleton />
          <ResumePostSkeleton />
          <ResumePostSkeleton />
        </div>
      )}
      <div className="hover mb-2 cursor-pointer group">
        <small>Angelo Ricardo - 3 de Agosto de 2023</small>
        <div>
          <div className="grid grid-cols-6 gap-2">
            <div className="col-span-4">
              <h2 className="text-2xl font-bold group-hover:text-blue-900 transition-all">
                Understanding Server Components in React 18 and Next.js 13{' '}
              </h2>
              <p className="font-light">
                With the release of Next.js 13, they have a new /app directory
                that has newer approaches to data rendering, fetching, and also
                ...
              </p>
            </div>
          </div>
          <div className="col-span-2"></div>
        </div>
      </div>
    </div>
  )
}

export default Home
