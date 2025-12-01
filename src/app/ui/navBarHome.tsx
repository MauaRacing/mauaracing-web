"use client";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { LangDictionary } from "@/[lang]/langDictionary";
import { useParams } from "next/navigation";

export function NavBarHome({
  dict,
  className,
  navMenu = false,
  fontColor,
  dialogColor,
}: {
  dict: LangDictionary;
  className?: string;
  navMenu?: boolean;
  fontColor: string;
  dialogColor: string;
}) {
  const [openAbout, setOpenAbout] = useState(false);
  const [openGetInvolved, setOpenGetInvolved] = useState(false);
  const { lang } = useParams<{ lang: string }>();
  return (
    <nav className={className}>
      <div
        className={`flex ${navMenu ? "flex-col" : "flex-row"} place-content-center`}
      >
        <div
          className="group relative"
          onMouseOver={() => setOpenAbout(true)}
          onMouseLeave={() => setOpenAbout(false)}
        >
          <div
            className={`hidden text-nowrap px-4 md:flex md:flex-row font-semibold text-lg group-hover:border-t-2 border-red-500`}
          >
            {dict.navbar.aboutGroup.title.toUpperCase()}
            <ChevronDown className={`ml-1 w-4 ${openAbout? "hidden" : "inline"}`}/>
            <ChevronUp className={`ml-1 w-4 ${openAbout? "inline" : "hidden"}`} />
          </div>
          <button
            onClick={() => setOpenAbout(!openAbout)}
            className={`md:hidden text-nowrap px-4 flex flex-row font-semibold text-lg group-hover:border-t-2 border-red-500`}>
            {dict.navbar.aboutGroup.title.toUpperCase()}
            <ChevronDown className={`ml-1 w-4 ${openAbout? "hidden" : "inline"}`}/>
            <ChevronUp className={`ml-1 w-4 ${openAbout? "inline" : "hidden"}`} />
          </button>
          <dialog
            open={openAbout}
            className={`${dialogColor} rounded-md min-w-44 w-10/12 lg:absolute relative`}
          >
            <div
              className={`flex flex-col justify-center grow pt-1 px-2 ${fontColor}`}
            >
              <Link href={`/${lang}/about`} className="border-b">
                {dict.navbar.aboutGroup.title}
              </Link>
              <Link href={`/${lang}/about-sae`} className="border-b ">
                {dict.navbar.aboutGroup.firstOption}
              </Link>
              <Link href={`/${lang}/our-team`} className="border-b ">
                {dict.navbar.aboutGroup.secondOption}
              </Link>
              <Link href={`/${lang}/sponsors`} className="">
                {dict.navbar.aboutGroup.thirdOption}
              </Link>
            </div>
          </dialog>
        </div>
        <Link
          href={`/${lang}/gallery`}
          className={`px-4 font-semibold text-lg hover:border-t-2 border-red-500`}
        >
          {dict.navbar.galleryGroup.title.toUpperCase()}
        </Link>
        <div
          className="group relative"
          onMouseOver={() => setOpenGetInvolved(true)}
          onMouseLeave={() => setOpenGetInvolved(false)}
        >
          <div
            className={`hidden px-4 md:flex md:flex-row font-semibold text-lg group-hover:border-t-2 border-red-500`}
          >
            {dict.navbar.getInvolvedGroup.title.toUpperCase()}
            <ChevronDown className={`ml-1 w-4 ${openGetInvolved? "hidden" : "inline"}`}/>
            <ChevronUp className={`ml-1 w-4 ${openGetInvolved? "inline" : "hidden"}`} />
          </div>
          <button
            onClick={() => setOpenGetInvolved(!openGetInvolved)}
            className={`md:hidden px-4 flex flex-row font-semibold text-lg group-hover:border-t-2 border-red-500 transition-[border] duration-75 ease-out`}>
            {dict.navbar.getInvolvedGroup.title.toUpperCase()}
            <ChevronDown className={`ml-1 w-4 ${openGetInvolved? "hidden" : "inline"}`}/>
            <ChevronUp className={`ml-1 w-4 ${openGetInvolved? "inline" : "hidden"}`} />
          </button>
          <dialog
            open={openGetInvolved}
            className={`${dialogColor} rounded-md min-w-44 w-10/12 lg:absolute relative`}
          >
            <div
              className={`flex flex-col justify-center grow pt-1 px-2 ${fontColor} text-nowrap`}
            >
              <Link href={`/${lang}/become-sponsor`} className="border-b">
                {dict.navbar.getInvolvedGroup.firstOption}
              </Link>
              <Link href={`/${lang}/become-member`} className="">
                {dict.navbar.getInvolvedGroup.secondOption}
              </Link>
            </div>
          </dialog>
        </div>
        <Link
          href={`/${lang}/contact`}
          className={`px-4 font-semibold text-lg hover:border-t-2 border-red-500`}
        >
          {dict.navbar.contactGroup.title.toUpperCase()}
        </Link>
      </div>
    </nav>
  );
}


