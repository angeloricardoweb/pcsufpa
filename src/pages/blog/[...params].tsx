import React from 'react'
import { client } from '../../services/prismicClient'
import { PostDocument } from '../../../.slicemachine/prismicio'
import ContentRichText from '../../components/Prismic/ContentRichText'

type Props = PostDocument

export default function Page(props: Props) {
  const post = props
  
  return (
    <div className="mt-20">
      <div className='max-w-2xl px-5 mx-auto'>
        <h1 className='text-4xl text-start mb-4 font-extrabold'>{post.data.titulo}</h1>
        <h2 className='text-sm text-zinc-500 py-2 border-y mb-2'>{post.data.autor} - {new Intl.DateTimeFormat("pt-BR",{dateStyle:"medium"}).format(new Date(post.first_publication_date))}</h2>
        <div className='w-full aspect-video mb-5'>
          <img src={post.data.banner.url as string} alt="banner" className='object-contain w-full' />
        </div>
        <ContentRichText data={post.data.conteudo} />
      </div>
    </div>
  )
}

export async function getServerSideProps(ctx: any) {
  const params = ctx.params
  const data = await client.getByID(params.params[0] as string)
  return {
    props: data,
  }
}
