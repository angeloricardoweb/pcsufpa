import { usePrismicDocumentByID } from '@prismicio/react'
import React from 'react'
import { client } from '../../services/prismicClient'
import { PostDocument } from '../../../.slicemachine/prismicio'
import Container from '../../components/Partials/Container'

type Props = PostDocument

export default function Page(props: Props) {
  const post = props
  return (
    <div className="mt-20">
      <Container>
        <h1>{post.data.titulo}</h1>
      </Container>
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
