"use client";
import Link from "next/link";
import { LangDictionary } from "@/[lang]/langDictionary";
import { useParams } from "next/navigation";


export function NavBar({
  dict,
  team,
  className,
  navMenu = false,
}: {
  dict: LangDictionary;
  team : "formula" | "h2" | "baja";
  className?: string;
  navMenu?: boolean;
  fontColor: string;
  dialogColor: string;
}) {
  const { lang } = useParams<{ lang: string }>();
  return (
    <nav className={className}>
      <div
        className={`flex ${navMenu ? "flex-col" : "flex-row"} place-content-center border-red-500 border-orange-500 border-blue-500`}
      >
        {// Load all the border colors
        }
        <Link
          href={`/${lang}/${team}/our-team`}
          className={`px-4 font-semibold text-lg hover:border-t-2 border-${teamProps["colors"][team]}-500`}
        >
          {dict.navbar.aboutGroup.secondOption.toUpperCase()}
        </Link>
        <Link
          href={`/${lang}/${team}/sponsors`}
          className={`px-4 font-semibold text-lg hover:border-t-2 border-${teamProps["colors"][team]}-500`}
        >
          {dict.navbar.aboutGroup.thirdOption.toUpperCase()}
        </Link>
        <Link
          href={`/${lang}/${team}/cars`}
          className={`px-4 font-semibold text-lg hover:border-t-2 border-${teamProps["colors"][team]}-500`}
        >
          {dict.navbar.carsGroup.title.toUpperCase()}
        </Link>
      </div>
    </nav>
  );
}

const teamProps = {
  "colors" :{
    "formula" : "red",
    "baja" : "orange",
    "h2" : "blue"
  }
}

