"use client"

import Image from "next/image"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-12 h-12 md:w-16 md:h-16">
        <Image
          src="/images/crepa-lab-logo.jpg"
          alt="Crepa Lab Logo"
          fill
          className="object-contain rounded-lg"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          Crepa<span className="text-primary">Lab</span>
        </span>
        <span className="text-xs md:text-sm font-mono text-muted-foreground tracking-widest">
          ESPECIALISTAS EN CREPAS
        </span>
      </div>
    </div>
  )
}
