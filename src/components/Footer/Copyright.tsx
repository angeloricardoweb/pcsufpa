/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Container from '../Partials/Container'

export function Copyright() {
  return (
    <div className="py-1 border-t border-t-zinc-600 mt-10 bg-brand-green-100">
      <Container>
        <div className="flex items-center justify-center md:justify-between flex-col md:flex-row">
          <small className="text-white text-sm m-0">
            PCS UFPA {new Date().getFullYear()} © Todos os direitos reservados
          </small>
          <a href="https://www.bredi.com.br/" target="_blank" rel="noreferrer">
            <small className="text-white">
              Desenvolvido por Angelo Ricardo
            </small>
          </a>
        </div>
      </Container>
    </div>
  )
}
