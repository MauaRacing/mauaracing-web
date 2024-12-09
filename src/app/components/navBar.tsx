import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function NavBar({className, navMenu = false} : {className? : string, navMenu? : boolean}) {
  return (
    <nav className={className}>
      <div className={`flex ${navMenu? "flex-col": "flex-row"} place-content-center`}>
        <div className="group">
          <Link href={"/about"} className="hidden px-4 md:flex md:flex-row font-semibold text-lg group-hover:border-t-2 border-red-500">
            QUEM SOMOS
            <ChevronDown className="ml-1 w-4"/>
          </Link>
          <button className="md:hidden px-4 flex flex-row font-semibold text-lg group-hover:border-t-2 border-red-500">
            QUEM SOMOS
            <ChevronDown className="ml-1 w-4"/>
          </button>
          <div className="hidden bg-white border rounded-md group-focus-within:flex md:group-hover:flex lg:group-hover:absolute min-w-44">
            <div className="flex flex-col justify-center grow pt-1 px-2 text-black">
              <Link href={"/about"} className="border-b md:hidden">Quem Somos</Link>
              <Link href={"/about-fsae"} className="border-b ">O que é FSAE?</Link>
              <Link href={"/our-team"} className="border-b ">Nossa equipe</Link>
              <Link href={"/sponsors"} className="border-b ">Patrocinadores</Link>
            </div>
          </div>
        </div>
        <Link href={"/"} className="px-4 font-semibold text-lg hover:border-t-2 border-red-500 ">CARROS</Link>
        <Link href={"/gallery"} className="px-4 font-semibold text-lg hover:border-t-2 border-red-500">GALERIA</Link>
        <div className="group">
          <Link href={"/"} className="hidden px-4 md:flex md:flex-row font-semibold text-lg group-hover:border-t-2 border-red-500">
            MÍDIA
            <ChevronDown className="ml-1 w-4"/>
          </Link>
          <button className="md:hidden px-4 flex flex-row font-semibold text-lg group-hover:border-t-2 border-red-500 transition-[border] duration-75 ease-out">
            MÍDIA
            <ChevronDown className="ml-1 w-4"/>
          </button>
          <div className="hidden bg-white border rounded-md group-focus-within:flex md:group-hover:flex lg:group-hover:absolute">
            <div className="flex flex-col justify-center grow pt-1 px-2 text-black">
              <Link href={"/"} className="border-b md:hidden">Mídia</Link>
              <Link href={"/"} className="border-b ">Notícias</Link>
              <Link href={"/"} className="border-b ">Vídeos</Link>
            </div>
          </div>
        </div>
        <div className="group">
          <Link href={"/"} className="hidden px-4 md:flex md:flex-row font-semibold text-lg group-hover:border-t-2 border-red-500">
            PARTICIPE
            <ChevronDown className="ml-1 w-4"/>
          </Link>
          <button className="md:hidden px-4 flex flex-row font-semibold text-lg group-hover:border-t-2 border-red-500 transition-[border] duration-75 ease-out">
            PARTICIPE
            <ChevronDown className="ml-1 w-4"/>
          </button>
          <div className="hidden bg-white border rounded-md group-focus-within:flex md:group-hover:flex lg:group-hover:absolute">
            <div className="flex flex-col justify-center grow pt-1 px-2 text-black">
              <Link href={"/"} className="border-b md:hidden">Participe</Link>
              <Link href={"/"} className="border-b ">Seja um patrocinador</Link>
              <Link href={"/"} className="border-b ">Seja um membro</Link>
            </div>
          </div>
        </div>
        <Link href={"/"} className="px-4 font-semibold text-lg hover:border-t-2 border-red-500">CONTATO</Link>
      </div>
    </nav>
  )
}