"use client"

import Image, { ImageProps } from "next/image"
import { ReactNode } from "react"


export function CarCardRoot({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white border border-gray-950 rounded-xl w-[100%] h-[20%] p-3 flex flex-col md:flex-row gap-y-3 gap-x-5">
      {children}
    </div>
  )
}

export function CarCardImage({ alt, src }: ImageProps) {
  return (
    <div className="mx-auto md:mx-0">
      <Image src={src} width={500} height={281.25} alt={alt} className="block md:inline-block"/>
    </div>
  )
}

export function CarCardText({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center grow">
      {children}
    </div>
  )
}

export function CarCardTitle({ children }: { children: ReactNode & string}) {
  return (
    <h1 className="text-2xl my-2 text-center">{children}</h1>
  )
}

export function CarCardDescription({children} : {children: ReactNode}){
  return(
    <div className="text-left">
      {children}
    </div>
  )
}

