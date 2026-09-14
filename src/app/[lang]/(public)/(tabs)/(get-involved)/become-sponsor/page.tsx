import { longHaul } from "@/app/ui/fonts/fonts";
import { Figtree } from "next/font/google";
import Image from "next/image";

const figtree = Figtree({subsets : ["latin"], weight: "400"});

export default function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  return (
    <main className={`min-h-dvh flex flex-col items-center bg-[#e1e4e6] ${figtree.className}`}>
      <h1 className={`text-6xl text-center ${longHaul.className} w-full p-2 mt-2`}>
        Seja um apoiador
      </h1>
      <p className="text-2xl text-pretty mt-5 text-center">Apoie nosso projeto e participe dessa história!</p>
      <p className="text-2xl text-pretty text-center"> Entre em contato para conhecer melhor as possibilidades de trabalharmos juntos!</p>
      <a href="mailto:formula@maua.br" className="inline-block px-5 py-3 text-lg font-semibold text-white text-blue-500 underline">
                                                                                                                                            formula@maua.br</a>
      <div className="flex md:flex-row flex-col justify-center md:justify-around mt-4">
        <div className="md:w-[50%]">
            <Image src="/assets/images/become-sponsor/image2.jpg" alt="" width={1000} height={1000} className=""/>
            <Image src="/assets/images/become-sponsor/image3.jpg" alt="" width={1000} height={1000}/>
        </div>
        <div className="md:w-[50%] flex flex-col items-center">
          <Image src="/assets/images/become-sponsor/image1.jpg" alt="" width={1000} height={1000} className=""/>
          <Image src="/assets/images/h2/cars/h225.jpg" alt="" width={1000} height={1000} className=""/>
        </div>
      </div>
    </main>
  );
}
