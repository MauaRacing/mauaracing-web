import { getDictionary } from "@/[lang]/dictionaries";
import { LangDictionary } from "@/[lang]/langDictionary";
import { longHaul } from "@/app/ui/fonts/fonts";
import { Figtree } from "next/font/google";
import Image from "next/image";

const figtree = Figtree({subsets : ["latin"], weight: "400"});

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang;
  const dict: LangDictionary = await getDictionary(lang);
  return (
    <main className="min-h-dvh flex flex-col items-center bg-[#e1e4e6]">
      <div className="w-[100%]">
        <article>
          <div>
            <h1 className={`text-6xl text-center ${longHaul.className} p-2 w-dvw mt-2`}>
              {dict.aboutGroup.aboutFsae.title}
            </h1>
            <p className={`text-left md:text-justify text-pretty md:indent-11 mx-10 text-2xl leading-relaxed mt-5 ${figtree.className}`}>
              {dict.aboutGroup.aboutFsae.mainText}
            </p>
          </div>
        </article>
        <div className={`flex flex-col md:flex-row justify-around gap-4 mb-8 mt-10 ${figtree.className}`}>
          <div className="md:w-[40%]">
            <div className="relative flex justify-center">
              <Image src="/assets/images/about-fsae/image1.jpg" alt="" width={2000} height={2000}
                className="z-30 relative md:w-[100%] w-[95%]"/>
              <div className="bg-red-800 w-[90%] sm:w-[95%] sm:translate-x-4 sm:translate-y-8 md:translate-x-10 md:translate-y-8 h-[95%] top-0 z-10 absolute"></div>                
            </div>
          </div>
          <div className="md:w-[50%] mt-6 mx-3 md:mx-0">
            <h2 className="text-2xl border-red-800 border-b-[3px] w-fit">Por que participar?</h2>
            <p className="mt-5 text-xl text-pretty leading-relaxed">
              A competição, além de divertida e desafiadora, é uma oportunidade de crescimento. O projeto é realizado em grupo com intuito de estimular e desenvolver o trabalho em equipe. Além disso, propiciam aos estudantes a oportunidade de aplicar na prática os conhecimentos adquiridos de forma teórica, desenvolvendo um projeto completo e construindo um carro tipo Fórmula. Os estudantes também ganham visibilidade por parte das grandes empresas e oportunidade de reconhecimento. Os alunos que se destacarem, podem acabar contratados pelas grandes montadoras que apoiam a competição.
            </p>
            <div className="mt-14 relative">
              <div className="relative">                
                <Image src="/assets/images/about-fsae/image2.jpg" alt="" width={2000} height={2000} className="relative z-20"/>
                <div className="bg-red-800 w-[90%] sm:w-[95%] sm:translate-x-10 sm:translate-y-8 md:translate-x-8 md:translate-y-8 h-[95%] top-0 z-10 absolute"></div>  
              </div>
              <p className="mt-6 md:mt-0 md:absolute bottom-10 -left-[300px] md:text-right font-bold">Fórmula SAE 2025 em Piracicaba<br/>21ª competição</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
