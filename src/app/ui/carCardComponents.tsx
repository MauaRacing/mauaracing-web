"use client"

import Image, { ImageProps } from "next/image"
import { ReactNode } from "react"
import { longHaul } from "./fonts/fonts"


export function CarCardRoot({ children, team ,year, alignment}: { children: ReactNode, team : String ,year : String, alignment : "left" | "right" }) {
  return (
    <div className="flex gap-2">
      {alignment == "left" ?
        <h1 className={`text-6xl my-2 text-center ${longHaul.className} md:self-center md:mr-4 `}>
          <div className="hidden md:inline">
            <p>{team}</p>
            <p className="text-red-600 -mt-6">{year}</p>
          </div>
        </h1>:
        <></>
      }
      <div className="bg-transparent border border-gray-800 rounded-xl w-[80%] h-[20%] p-3 ">
        <div className="flex flex-col md:flex-row md:gap-y-3 md:gap-x-5 p-2 rounded-md">
          <div className={`inline md:hidden text-center text-6xl ${longHaul.className}`}>
            <p>{team}</p>
            <p className="text-red-600 -mt-6">{year}</p>
          </div>
          {children}
        </div>
      </div>
      {alignment == "right" ?
        <h1 className={`text-6xl my-2 text-center -rotate-90 ${longHaul.className} self-center`}>
          <div className="hidden md:inline">
            <div className="inline">
              {team}
            </div>
            <div className="text-red-600 inline">
              {year}
            </div>
          </div>
        </h1>:
        <></>
      }
    </div>
  )
}

export function CarCardImage({ alt, src }: ImageProps) {
  return (
    <div className="mx-auto md:mx-0">
      <Image src={src} width={500} height={281.25} alt={alt} className="block md:inline-block md:w-[500px] md:h-[281px] object-contain"/>
    </div>
  )
}

export function CarCardText({ children }: { children: ReactNode}) {
  return (
    <div className={`flex flex-row items-center justify-center p-4`}>
      {children}
    </div>
  )
}

export function CarCardDescription({children, alignment} : {children: ReactNode, alignment : String}){
  return(
    <div className={`w-fit text-balance`}>
      {children}
    </div>
  )
}

