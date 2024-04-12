import Link from 'next/link'
import React from 'react'
import { PostDocument, PostDocumentData } from '../../../.slicemachine/prismicio'
import slugify from 'slugify'

export default function CardPost({ post }: { post: PostDocument }) {
    return (
        <Link href={`/blog/${post.id}/${slugify(post.data.titulo ?? '')}`}>
            <div className="hover mb-2 cursor-pointer group">
                <div className="grid grid-cols-6 gap-2 items-center">
                    <div className="col-span-4">
                        <small className='text-zinc-600'>
                            {post.data.autor} -{' '}
                            {new Intl.DateTimeFormat('pt-BR', {
                                dateStyle: 'medium',
                            }).format(new Date(post.first_publication_date))}
                        </small>
                        <h2 className="text-2xl font-bold group-hover:text-brand-blue transition-all">
                            {post.data.titulo}
                        </h2>
                        <p className="font-light font-garamond">{post.data.resumo}</p>
                        <div className='text-xs text-white px-2 w-fit rounded-full'
                            style={{ backgroundColor: post.data.categoria === 'Evento' ? '#F04623' : '#50ADE6' }}
                        >
                            {post.data.categoria}
                        </div>
                    </div>
                    <div
                        className="col-span-2 bg-cover bg-center w-full aspect-[7/5]"
                        style={{
                            backgroundImage: `url(${post.data.thumbnail.url})`,
                        }}
                    />
                </div>
            </div>
        </Link>
    )
}
