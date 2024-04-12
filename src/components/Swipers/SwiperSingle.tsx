/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { EixoDocumentData } from '../../../.slicemachine/prismicio'

type Props = {
  banners: EixoDocumentData['galeria']
}

export default function SwiperSingle({ banners }: Props) {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="aspect-[21/8] md:h-auto"
    >
      {banners.map((imagem, index) => (
        <SwiperSlide key={index}>
          <img
            src={imagem.foto.url ?? ''}
            alt={'galeria'}
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
