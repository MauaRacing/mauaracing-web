import { longHaul } from "@/app/ui/fonts/fonts";
import { Figtree } from "next/font/google";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { LangDictionary } from "@/app/[lang]/langDictionary";
import { Metadata, ResolvingMetadata } from "next";

const figtree = Figtree({subsets : ["latin"], weight: "400"});

export async function generateMetadata(
  {
    params,
  }: { params: Promise<{ lang: string }>},
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const lang = (await params).lang;
  const dict : LangDictionary = await getDictionary(lang);
  return {
    title: dict.formulaTabs.ourTeam.title
  }
}

export default async function Page({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang;
  const dict: LangDictionary = await getDictionary(lang);
  return (
    <main className={`min-h-dvh flex flex-col items-center bg-[#e1e4e6] ${figtree.className}`}>
      <h1 className={`text-6xl text-center ${longHaul.className} w-dvw p-2 mt-2`}>{dict.formulaTabs.ourTeam.title}</h1>
      { /*<div className="my-8">
        <MemberSubsystem subsystemName="" >
          <MemberCard name="nome e sobrenome" imagesrc="/assets/images/contact/image1.jpg" linkedinLink=""/>
          <MemberCard name="nome e sobrenome" imagesrc="/assets/images/contact/image1.jpg" linkedinLink="" />
          <MemberCard name="nome e sobrenome" imagesrc="/assets/images/contact/image1.jpg" linkedinLink="" />
        </MemberSubsystem>
        <div className="flex flex-row gap-10 items-center justify-center">
          <section>
            <div className="relative p-2 h-96 w-72 border-2 rounded-xl shadow-lg flex flex-row text-white text-lg bg-transparent">
              <Image className="z-10 absolute h-[90%] w-[90%] top-5 left-3 mx-auto rounded-xl" src={`/assets/images/contact/image1.jpg`} width={200} height={200} alt="" />
              <div className="z-20 w-full flex flex-col justify-end mb-4 ml-4">
                <Link href={``} className="text-2xl">Linkedin</Link>
                <p>subsistema</p>
                <p>curso</p>
              </div>
            </div>
            <div className="relative flex justify-center">
              <p className="bg-black -mt-4 text-white text-center w-fit px-2">NOME COMPLETO</p>
            </div>
          </section>
          <section>
            <div className="relative p-2 m-4 h-96 w-72 border-2  rounded-xl shadow-lg flex flex-row text-white text-lg bg-transparent">
              <Image className="z-10 absolute h-[100%] w-[100%] top-0 left-0 rounded-xl" src={`/assets/images/contact/image1.jpg`} width={200} height={200} alt="" />
              <div className="z-20 w-full flex flex-col justify-end ">
                <Link href={``} className="text-2xl">Linkedin</Link>
                <p>curso</p>
                <p>subsistema</p>
                <p>nome completo</p>
              </div>
            </div>
          </section>
          </div>
      </div>   */}
    </main>
  );
}
