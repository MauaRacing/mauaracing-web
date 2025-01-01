"use client"
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { LangDictionary } from "../[lang]/langDictionary";
import { useParams } from "next/navigation";

export function NavBar(
  { dict, className, navMenu = false, fontColor, dialogColor}:
    { dict: LangDictionary, className?: string, navMenu?: boolean, fontColor: string, dialogColor: string}
) {
  const [openAbout, setOpenAbout] = useState(false);
  const [openMedia, setOpenMedia] = useState(false);
  const [openGetInvolved, setOpenGetInvolved] = useState(false);
  const {lang} = useParams<{ lang: string }>();
  return (
    <nav className={className}>
      <div className={`flex ${navMenu ? "flex-col" : "flex-row"} place-content-center`}>
        <div className="group relative" onMouseOver={() => setOpenAbout(true)} onMouseLeave={() => setOpenAbout(false)}>
          <Link href={`/${lang}/about`} className="hidden text-nowrap px-4 md:flex md:flex-row font-semibold text-lg group-hover:border-t-2 border-red-500">
            {dict.navbar.firstGroup.title}
            <ChevronDown className="ml-1 w-4" />
          </Link>
          <button className="md:hidden text-nowrap px-4 flex flex-row font-semibold text-lg group-hover:border-t-2 border-red-500">
            {dict.navbar.firstGroup.title}
            <ChevronDown className="ml-1 w-4" />
          </button>
          <dialog open={openAbout} className={`${dialogColor} rounded-md min-w-44 w-10/12 lg:absolute relative`}>
            <div className={`flex flex-col justify-center grow pt-1 px-2 ${fontColor}`}>
              <Link href={`/${lang}/about`} className="border-b md:hidden">{dict.navbar.firstGroup.title}</Link>
              <Link href={`/${lang}/about-fsae`} className="border-b ">{dict.navbar.firstGroup.firstOption}</Link>
              <Link href={`/${lang}/our-team`} className="border-b ">{dict.navbar.firstGroup.secondOption}</Link>
              <Link href={`/${lang}/sponsors`} className="">{dict.navbar.firstGroup.thirdOption}</Link>
            </div>
          </dialog>
        </div>
        <Link href={`/${lang}/cars`} className="px-4 font-semibold text-lg hover:border-t-2 border-red-500 ">{dict.navbar.secondGroup.title}</Link>
        <Link href={`/${lang}/gallery`} className="px-4 font-semibold text-lg hover:border-t-2 border-red-500">{dict.navbar.thirdGroup.title}</Link>
        <div className="group relative" onMouseOver={() => setOpenMedia(true)} onMouseLeave={() => setOpenMedia(false)}>
          <Link href={`/${lang}/`} className="hidden px-4 md:flex md:flex-row font-semibold text-lg group-hover:border-t-2 border-red-500">
            {dict.navbar.fourthGroup.title}
            <ChevronDown className="ml-1 w-4" />
          </Link>
          <button className="md:hidden px-4 flex flex-row font-semibold text-lg group-hover:border-t-2 border-red-500 transition-[border] duration-75 ease-out">
          {dict.navbar.fourthGroup.title}
            <ChevronDown className="ml-1 w-4" />
          </button>
          <dialog open={openMedia} className={`${dialogColor} rounded-md min-w-32 w-10/12 lg:absolute relative`}>
            <div className={`flex flex-col justify-center grow pt-1 px-2 ${fontColor} text-nowrap`}>
              <Link href={`/${lang}/`} className="border-b md:hidden">{dict.navbar.fourthGroup.title}</Link>
              <Link href={`/${lang}/`} className="border-b ">{dict.navbar.fourthGroup.firstOption}</Link>
              <Link href={`/${lang}/`} className="">{dict.navbar.fourthGroup.secondOption}</Link>
            </div>
          </dialog>
        </div>
        <div className="group relative" onMouseOver={() => setOpenGetInvolved(true)} onMouseLeave={() => setOpenGetInvolved(false)}>
          <Link href={`/${lang}/`} className="hidden px-4 md:flex md:flex-row font-semibold text-lg group-hover:border-t-2 border-red-500">
            {dict.navbar.fifthGroup.title}
            <ChevronDown className="ml-1 w-4" />
          </Link>
          <button className="md:hidden px-4 flex flex-row font-semibold text-lg group-hover:border-t-2 border-red-500 transition-[border] duration-75 ease-out">
          {dict.navbar.fifthGroup.title}
            <ChevronDown className="ml-1 w-4" />
          </button>
          <dialog open={openGetInvolved} className={`${dialogColor} rounded-md min-w-44 w-10/12 lg:absolute relative`}>
            <div className={`flex flex-col justify-center grow pt-1 px-2 ${fontColor} text-nowrap`}>
              <Link href={`/${lang}/`} className="border-b md:hidden">{dict.navbar.fifthGroup.title}</Link>
              <Link href={`/${lang}/`} className="border-b">{dict.navbar.fifthGroup.firstOption}</Link>
              <Link href={`/${lang}/`} className="">{dict.navbar.fifthGroup.secondOption}</Link>
            </div>
          </dialog>
        </div>
        <Link href={`/${lang}/contact`} className="px-4 font-semibold text-lg hover:border-t-2 border-red-500">{dict.navbar.sixthGroup.title}</Link>
      </div>
    </nav>
  )
}