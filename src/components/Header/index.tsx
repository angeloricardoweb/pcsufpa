/* eslint-disable @next/next/no-img-element */
import TopBar from './TopBar'
import NavLinks, { navLinks } from './NavLinks'
import { useWindowScroll } from 'react-use'
import Link from 'next/link'
import Container from '../Partials/Container'
import { Icon } from '@iconify/react'
import useMenuHamburguerStore from '../../stores/useMenuHamburguerStore'
import { useEffect } from 'react'

export function Header() {
  const { y } = useWindowScroll()
  const { setShowMenuHamburguer } = useMenuHamburguerStore()

  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <header
      className={`fixed z-50 w-full shadow-xl backdrop-blur transition-all top-0 py-3 ${y > 0 ? 'bg-white/70' : 'bg-zinc-100'
        } `}
    >
      {/* {y > 0 ? null : <TopBar />} */}

      <div className='px-10'>
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className='flex items-center gap-2 w-fit'>
              <img src="/img/logo.png" alt="logo" className='w-10 h-10' />
              <strong className='text-xl cursor-pointer'>PET Interdisciplinar Conexões de Saberes</strong>
            </div>
          </Link>
          <div className="md:flex gap-5 items-center hidden">
            <NavLinks />
          </div>
          <div
            className="md:hidden"
            onClick={() => setShowMenuHamburguer(true)}
          >
            <Icon icon="mdi:menu" className="text-white text-3xl" />
          </div>
        </div>
      </div>
    </header>
  )
}
