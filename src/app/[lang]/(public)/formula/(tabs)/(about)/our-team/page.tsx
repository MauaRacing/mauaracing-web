import Image from "next/image"
import { longHaul } from "@/app/ui/fonts/fonts";
import { Figtree } from "next/font/google";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { LangDictionary } from "@/app/[lang]/langDictionary";
import { Metadata, ResolvingMetadata } from "next";
import { MemberCard } from "@/app/ui/memberCard";
import { MemberSubsystem } from "@/app/ui/memberSubsystem";
import { Link } from "lucide-react";

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
     <div className="my-8">
        <MemberSubsystem subsystemName="" >
          <MemberCard name="nome e sobrenome" imagesrc="/assets/images/contact/image1.jpg" linkedinLink="linkedin.com"/>
          <MemberCard name="nome e sobrenome" imagesrc="/assets/images/contact/image1.jpg" linkedinLink="linkedin.com" />
          <MemberCard name="nome e sobrenome" imagesrc="/assets/images/contact/image1.jpg" linkedinLink="linkdein.com" />
        </MemberSubsystem>
        <div className="flex flex-row gap-10 items-center justify-center">
          <section>
            <div className="relative p-2 h-96 w-72 border-2 rounded-xl shadow-lg flex flex-row text-white text-lg bg-transparent">
              <Image
                className="z-10 absolute h-[90%] w-[90%] top-5 left-3 mx-auto rounded-xl"
                src={`/assets/images/contact/image1.jpg`} width={200} height={200}
                alt="" />
              <div className="z-20 w-full flex flex-col justify-end mb-4 ml-4">
                <a href={`linkedin.com`} className="text-2xl">Linkedin</a>
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
                <a href={`https://linkedin.com`} className="text-2xl">Linkedin</a>
                <p>curso</p>
                <p>subsistema</p>
                <p>nome completo</p>
              </div>
            </div>
          </section>
          </div>
      </div>   
    </main>
  );
}
