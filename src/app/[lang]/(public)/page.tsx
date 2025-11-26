import { Footer } from "@/ui/footer";
import { Globe } from "@/ui/globe";
import { NavBar } from "@/ui/navBar";
import { NavMenu } from "@/ui/navMenu";
import Image from "next/image";
import formulaImage from "public/assets/images/79.jpg";
import h2Image from "public/assets/images/h2/h2BG.jpg";
import bajaImage from "public/assets/images/baja/bajaBG.jpg"
import { getDictionary } from "@/[lang]/dictionaries";
import { LangDictionary } from "@/[lang]/langDictionary";
import { Figtree } from "next/font/google";
import Link from "next/link";

const figtree = Figtree({subsets : ["latin"], weight: "600"});

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang;
  const dict: LangDictionary = await getDictionary(lang);
  return (
    <div className="flex flex-col relative">
      <main className={`flex flex-col items-center min-h-dvh group/main`}>
        <Image
          src={"/assets/images/logoMR_whitebg.png"}
          width={210}
          height={210}
          alt="Logo Mauá Racing"
          className="ml-3"
          priority={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 group/images"> 
          <Link href="/formula" className="group/formula">
            <Image src={formulaImage} alt="" fill className="hidden group-hover/formula:inline -z-10 object-cover"/>
            <Image src={formulaImage} alt="Equipe Formula" className="-z-20 col-span-1 group-hover/images:opacity-0 h-dvh object-cover"/>
          </Link>
          <Link href="/h2" className="group/h2">
            <Image src={h2Image} alt="" fill className="hidden group-hover/h2:inline -z-10 object-cover"/>
            <Image src={h2Image} alt="Equipe H2" className="-z-20 col-span-1 group-hover/images:opacity-0 h-dvh object-cover"/>
          </Link>
          <Link href="/baja" className="group/baja">
            <Image src={bajaImage} alt="" fill className="hidden group-hover/baja:inline -z-10 object-cover"/>
            <Image src={bajaImage} alt="Equipe Baja" className="-z-20 col-span-1 group-hover/images:opacity-0 h-dvh object-cover"/>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
