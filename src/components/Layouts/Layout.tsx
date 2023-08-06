import React from 'react'
import Container from '../Partials/Container'
import { InnerHeader } from '../Partials/InnerHeader'
import { Sidebar } from '../Partials/Sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-[70vh]">
      <Container>
        <div className="md:grid grid-cols-6 mt-20">
          <div className="col-span-4 border-r border-zinc-200 pr-5">
            <InnerHeader />
            <div className="mt-5">{children}</div>
          </div>
          <Sidebar />
        </div>
      </Container>
    </main>
  )
}
