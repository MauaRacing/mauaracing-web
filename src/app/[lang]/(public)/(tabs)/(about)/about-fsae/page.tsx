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
    <main className="min-h-dvh flex flex-col items-center gap-3 bg-[#e1e4e6]">
      <div className="w-[100%] mt-8">
        <article>
          <div>
            <h1 className={`text-6xl my-2 text-center ${longHaul.className}`}>
              {dict.aboutGroup.aboutFsae.title}
            </h1>
            <p className={`text-justify text-pretty indent-11 mx-10 text-2xl leading-relaxed mt-5 ${figtree.className}`}>
              {dict.aboutGroup.aboutFsae.mainText}
            </p>
          </div>
        </article>
        <div className={`flex flex-col md:flex-row justify-around gap-4 mb-8 mt-10 ${figtree.className}`}>
          <div className="w-[40%]">
            <div className="relative">
              <Image src="/assets/images/about-fsae/image1.jpg" alt="" width={2000} height={2000} className="z-30 relative"/>
              <div className="bg-red-800 w-[95%] translate-x-10 translate-y-8 h-[95%] top-0 z-10 absolute"></div>                
            </div>
          </div>
          <div className="w-[40%] mt-6">
            <h2 className="text-2xl">Por que participar?</h2>
            <p className="mt-5">
              A competição, além de divertida e desafiadora, é uma oportunidade de crescimento. O projeto é realizado em grupo com intuito de estimular e desenvolver o trabalho em equipe. Além disso, propiciam aos estudantes a oportunidade de aplicar na prática os conhecimentos adquiridos de forma teórica, desenvolvendo um projeto completo e construindo um carro tipo Fórmula. Os estudantes também ganham visibilidade por parte das grandes empresas e oportunidade de reconhecimento. Os alunos que se destacarem, podem acabar contratados pelas grandes montadoras que apoiam a competição.
            </p>
            <div className="mt-14 relative">
              <div className="relative">                
                <Image src="/assets/images/about-fsae/image2.jpg" alt="" width={2000} height={2000} className="relative z-20"/>
                <div className="bg-red-800 w-[95%] translate-x-10 translate-y-8 h-[95%] top-0 z-10 absolute"></div>  
              </div>
              <p className="absolute bottom-10 -left-[300px] text-right font-bold">Fórmula SAE 2025 em Piracicaba<br/>21ª competição</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
