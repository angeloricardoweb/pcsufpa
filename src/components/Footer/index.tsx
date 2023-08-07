/* eslint-disable @next/next/no-img-element */
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { navLinks } from '../Header/NavLinks'
import Container from '../Partials/Container'
import { Copyright } from './Copyright'

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="flex justify-between flex-wrap gap-10">
          <div className="w-[320px]">
            <img src="/img/logo.png" alt="Logo" />
          </div>

          <div className="flex gap-10 flex-wrap">
            <div className="flex flex-col w-[320px]">
              <strong>Encontre-nos</strong>
              <small>Av. Perimetral 1400, Belém, PA, 66077-530</small>
            </div>

            <div className="flex flex-col gap-5 w-[80px]">
              {navLinks.map((link) => {
                return (
                  <Link href={link.route} key={link.name}>
                    <strong>{link.name}</strong>
                  </Link>
                )
              })}
            </div>

            <div className="flex flex-col w-[80px]">
              <strong>Siga nos</strong>
              <div className="flex gap-2">
                <a href="/" rel="noreferrer" target="_blank">
                  <Icon icon="mdi:facebook" className="text-white text-xl" />
                </a>
                <a href="/" rel="noreferrer" target="_blank">
                  <Icon icon="mdi:instagram" className="text-white text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Copyright />
    </footer>
  )
}
