import { Footer } from "@/ui/footer";
import { Globe } from "@/ui/globe";
import { NavBar } from "@/ui/navBar";
import { NavMenu } from "@/ui/navMenu";
import Image from "next/image";
import bg from "public/assets/images/h2/h2BG.jpg";
import { getDictionary } from "@/[lang]/dictionaries";
import { LangDictionary } from "@/[lang]/langDictionary";
import { Figtree } from "next/font/google";
import Link from "next/link";
import { HomeIcon } from "lucide-react";


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
      <main className={`flex justify-center min-h-dvh lg:h-[130dvh]`}>
        <Image className="-z-10 object-cover " src={bg} fill alt="" />
        <div className="bg-transparent flex flex-col mt-12 lg:mt-0">
          <div className="h-24 flex flex-col md:justify-between gap-4 my-2 justify-center">
            <div className="flex items-center justify-center">
              <NavMenu
                dict={dict}
                team={"h2"}
                className={`md:hidden flex ${figtree.className}`}
                dialogColor="bg-transparent"
                fontColor="text-black"
              />
              <Image
                src={"/assets/images/logoMR_whitebg.png"}
                width={210}
                height={210}
                alt="Logo Mauá Racing"
                className="ml-3"
                priority={true}
              />
              <Globe className="absolute left-[20px]" color="black" />
              <Link href={`/${lang}`}>
                <HomeIcon color="black" className="ml-[10px]"/>
              </Link>
            </div>
            <NavBar
              dict={dict}
              team={"h2"}
              className={`hidden md:block ${figtree.className} bg-white/30`}
              dialogColor="bg-transparent"
              fontColor="text-black"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
