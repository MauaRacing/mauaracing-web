"use client";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { LangDictionary } from "@/[lang]/langDictionary";
import { useParams } from "next/navigation";
import { teamProps } from "../lib/teamProps";

export function NavBar({
  dict,
  team,
  className,
  navMenu = false,
  fontColor,
  dialogColor,
}: {
  dict: LangDictionary;
  team : "formula" | "h2" | "baja";
  className?: string;
  navMenu?: boolean;
  fontColor: string;
  dialogColor: string;
}) {
  const [openAbout, setOpenAbout] = useState(false);
  const [openGetInvolved, setOpenGetInvolved] = useState(false);
  const { lang } = useParams<{ lang: string }>();
  const teamColor = teamProps[team]["mainColor"];
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
            className={`hidden text-nowrap px-4 md:flex md:flex-row font-semibold text-lg group-hover:border-t-2 border-${teamColor}-500`}
          >
            {dict.navbar.aboutGroup.title.toUpperCase()}
            <ChevronDown className="ml-1 w-4" />
          </div>
          <button className={`md:hidden text-nowrap px-4 flex flex-row font-semibold text-lg group-hover:border-t-2 border-${teamColor}-500`}>
            {dict.navbar.aboutGroup.title.toUpperCase()}
            <ChevronDown className="ml-1 w-4" />
          </button>
          <dialog
            open={openAbout}
            className={`${dialogColor} rounded-md min-w-44 w-10/12 lg:absolute relative`}
          >
            <div
              className={`flex flex-col justify-center grow pt-1 px-2 ${fontColor}`}
            >
              <Link href={`/${lang}/${team}/about`} className="border-b">
                {dict.navbar.aboutGroup.title}
              </Link>
              <Link href={`/${lang}/${team}/about-${teamProps[team]["competition"]}`} className="border-b ">
                {dict.navbar.aboutGroup.firstOption}
              </Link>
              <Link href={`/${lang}/${team}/our-team`} className="border-b ">
                {dict.navbar.aboutGroup.secondOption}
              </Link>
              <Link href={`/${lang}/${team}/sponsors`} className="">
                {dict.navbar.aboutGroup.thirdOption}
              </Link>
            </div>
          </dialog>
        </div>
        <Link
          href={`/${lang}/${team}/cars`}
          className={`px-4 font-semibold text-lg hover:border-t-2 border-${teamColor}-500`}
        >
          {dict.navbar.carsGroup.title.toUpperCase()}
        </Link>
        <Link
          href={`/${lang}/${team}/gallery`}
          className={`px-4 font-semibold text-lg hover:border-t-2 border-${teamColor}-500`}
        >
          {dict.navbar.galleryGroup.title.toUpperCase()}
        </Link>
        <div
          className="group relative"
          onMouseOver={() => setOpenGetInvolved(true)}
          onMouseLeave={() => setOpenGetInvolved(false)}
        >
          <div
            className={`hidden px-4 md:flex md:flex-row font-semibold text-lg group-hover:border-t-2 border-${teamColor}-500`}
          >
            {dict.navbar.getInvolvedGroup.title.toUpperCase()}
            <ChevronDown className="ml-1 w-4" />
          </div>
          <button className={`md:hidden px-4 flex flex-row font-semibold text-lg group-hover:border-t-2 border-${teamColor}-500 transition-[border] duration-75 ease-out`}>
            {dict.navbar.getInvolvedGroup.title.toUpperCase()}
            <ChevronDown className="ml-1 w-4" />
          </button>
          <dialog
            open={openGetInvolved}
            className={`${dialogColor} rounded-md min-w-44 w-10/12 lg:absolute relative`}
          >
            <div
              className={`flex flex-col justify-center grow pt-1 px-2 ${fontColor} text-nowrap`}
            >
              <Link href={`/${lang}/${team}/become-sponsor`} className="border-b">
                {dict.navbar.getInvolvedGroup.firstOption}
              </Link>
              <Link href={`/${lang}/${team}/become-member`} className="">
                {dict.navbar.getInvolvedGroup.secondOption}
              </Link>
            </div>
          </dialog>
        </div>
        <Link
          href={`/${lang}/${team}/contact`}
          className={`px-4 font-semibold text-lg hover:border-t-2 border-${teamColor}-500`}
        >
          {dict.navbar.contactGroup.title.toUpperCase()}
        </Link>
      </div>
    </nav>
  );
}


