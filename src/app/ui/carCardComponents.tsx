"use client"

import Image, { ImageProps } from "next/image"
import { ReactNode } from "react"
import { longHaul } from "./fonts/fonts"


export function CarCardRoot({ children }: { children: ReactNode }) {
  return (
    <div className="bg-transparent border border-gray-950 rounded-xl w-[100%] h-[20%] p-3 ">
      <div className="flex flex-col md:flex-row gap-y-3 gap-x-5 bg-black p-2 rounded-md">
        {children}
      </div>
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

export function CarCardText({ children, carOnLeft }: { children: ReactNode, carOnLeft?: boolean }) {
  return (
    <div className={`flex flex-row items-center grow`}>
      {children}
    </div>
  )
}

export function CarCardTitle({ children, rotation }: { children: ReactNode, rotation?: number}) {
  return (
    <h1 className={`text-6xl my-2 text-center -rotate-${rotation} ${longHaul.className}`}>{children}</h1>
  )
}

export function CarCardDescription({children, alignment} : {children: ReactNode, alignment : String}){
  return(
    <div className={`w-[40%] text-${alignment} text-white bg-black`}>
      {children}
    </div>
  )
}

