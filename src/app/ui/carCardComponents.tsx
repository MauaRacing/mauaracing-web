"use client"

import Image, { ImageProps } from "next/image"
import { ReactNode } from "react"
import { longHaul } from "./fonts/fonts"


export function CarCardRoot({ children, year, alignment }: { children: ReactNode, year : String, alignment : "left" | "right" }) {
  return (
    <div className="flex gap-2">
      {alignment == "left" ?
        <h1 className={`text-6xl my-2 text-center ${longHaul.className} self-center mr-4`}>
          <div className="">
            <p>MR</p>
            <p className="text-red-600 -mt-6">{year}</p>
          </div>
        </h1>:
        <></>
      }
      <div className="bg-transparent border border-gray-950 rounded-xl w-[80%] h-[20%] p-3 ">
        <div className="flex flex-col md:flex-row gap-y-3 gap-x-5 bg-black p-2 rounded-md">
          {children}
        </div>
      </div>
      {alignment == "right" ?
        <h1 className={`text-6xl my-2 text-center -rotate-90 ${longHaul.className} self-center`}>
          <div className="">
            <div className="inline">
                MR
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
      <Image src={src} width={500} height={281.25} alt={alt} className="block md:inline-block "/>
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
    <div className={`w-fit text-white bg-black text-balance`}>
      {children}
    </div>
  )
}

