import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
export const navLinks = [
  {
    route: '/',
    name: 'Blog',
  },
  {
    route: '/eventos',
    name: 'Eventos',
  },
  {
    route: '/acervo',
    name: 'Acervo',
  },
  {
    route: '/sobre-nos',
    name: 'Sobre nós',
  },
  {
    route: '/atuacoes',
    name: 'Atuações',
  },
  {
    route: '/conexistas',
    name: 'Conexistas',
  },
]
export function InnerHeader() {
  const router = useRouter()
  return (
    <header className="flex border-b border-zinc-200">
      {navLinks.map((link) => (
        <Link href={link.route} key={link.name}>
          <span
            className={`p-3 font-light cursor-pointer text-sm ${
              router.asPath === link.route ? 'active-link' : ''
            }`}
          >
            {link.name}
          </span>
        </Link>
      ))}
    </header>
  )
}
