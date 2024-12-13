"use client"
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function NavBar(
  { className, navMenu = false, fontColor, dialogColor }:
    { className?: string, navMenu?: boolean, fontColor: string, dialogColor: string }
) {
  const [openAbout, setOpenAbout] = useState(false);
  const [openMedia, setOpenMedia] = useState(false);
  const [openGetInvolved, setOpenGetInvolved] = useState(false);

  return (
    <nav className={className}>
      <div className={`flex ${navMenu ? "flex-col" : "flex-row"} place-content-center`}>
        <div className="group relative" onMouseOver={() => setOpenAbout(true)} onMouseLeave={() => setOpenAbout(false)}>
          <Link href={"/about"} className="hidden px-4 md:flex md:flex-row font-semibold text-lg group-hover:border-t-2 border-red-500">
            QUEM SOMOS
            <ChevronDown className="ml-1 w-4" />
          </Link>
          <button className="md:hidden px-4 flex flex-row font-semibold text-lg group-hover:border-t-2 border-red-500">
            QUEM SOMOS
            <ChevronDown className="ml-1 w-4" />
          </button>
          <dialog open={openAbout} className={`${dialogColor} rounded-md min-w-44 md:absolute relative`}>
            <div className={`flex flex-col justify-center grow pt-1 px-2 ${fontColor}`}>
              <Link href={"/about"} className="border-b md:hidden">Quem Somos</Link>
              <Link href={"/about-fsae"} className="border-b ">O que é FSAE?</Link>
              <Link href={"/our-team"} className="border-b ">Nossa equipe</Link>
              <Link href={"/sponsors"} className="border-b ">Patrocinadores</Link>
            </div>
          </dialog>
        </div>
        <Link href={"/"} className="px-4 font-semibold text-lg hover:border-t-2 border-red-500 ">CARROS</Link>
        <Link href={"/gallery"} className="px-4 font-semibold text-lg hover:border-t-2 border-red-500">GALERIA</Link>
        <div className="group relative" onMouseOver={() => setOpenMedia(true)} onMouseLeave={() => setOpenMedia(false)}>
          <Link href={"/"} className="hidden px-4 md:flex md:flex-row font-semibold text-lg group-hover:border-t-2 border-red-500">
            MÍDIA
            <ChevronDown className="ml-1 w-4" />
          </Link>
          <button className="md:hidden px-4 flex flex-row font-semibold text-lg group-hover:border-t-2 border-red-500 transition-[border] duration-75 ease-out">
            MÍDIA
            <ChevronDown className="ml-1 w-4" />
          </button>
          <dialog open={openMedia} className={`${dialogColor} rounded-md min-w-32 md:absolute relative`}>
            <div className={`flex flex-col justify-center grow pt-1 px-2 ${fontColor} text-nowrap`}>
              <Link href={"/"} className="border-b md:hidden">Mídia</Link>
              <Link href={"/"} className="border-b ">Notícias</Link>
              <Link href={"/"} className="border-b ">Vídeos</Link>
            </div>
          </dialog>
        </div>
        <div className="group relative" onMouseOver={() => setOpenGetInvolved(true)} onMouseLeave={() => setOpenGetInvolved(false)}>
          <Link href={"/"} className="hidden px-4 md:flex md:flex-row font-semibold text-lg group-hover:border-t-2 border-red-500">
            PARTICIPE
            <ChevronDown className="ml-1 w-4" />
          </Link>
          <button className="md:hidden px-4 flex flex-row font-semibold text-lg group-hover:border-t-2 border-red-500 transition-[border] duration-75 ease-out">
            PARTICIPE
            <ChevronDown className="ml-1 w-4" />
          </button>
          <dialog open={openGetInvolved} className={`${dialogColor} rounded-md min-w-44 md:absolute relative`}>
            <div className={`flex flex-col justify-center grow pt-1 px-2 ${fontColor} text-nowrap`}>
              <Link href={"/"} className="border-b md:hidden">Participe</Link>
              <Link href={"/"} className="border-b ">Seja um patrocinador</Link>
              <Link href={"/"} className="border-b ">Seja um membro</Link>
            </div>
          </dialog>
        </div>
        <Link href={"/contact"} className="px-4 font-semibold text-lg hover:border-t-2 border-red-500">CONTATO</Link>
      </div>
    </nav>
  )
}