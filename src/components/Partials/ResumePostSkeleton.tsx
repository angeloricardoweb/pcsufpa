import React from 'react'

export function ResumePostSkeleton() {
  return (
    <div className="hover mb-2 cursor-pointer group flex flex-col gap-1">
      <div className="bg-zinc-200 h-3 w-[50%] animate-pulse" />
      <div className="grid grid-cols-6 gap-2">
        <div className="col-span-4  flex flex-col gap-1">
          <div className="bg-zinc-200 h-6 w-full animate-pulse" />

          <div className="bg-zinc-200 h-6 w-full animate-pulse" />
          <div className="bg-zinc-200 h-6 w-full animate-pulse" />
        </div>
        <div className="bg-zinc-200 w-full animate-pulse col-span-2 h-full" />
      </div>
    </div>
  )
}
