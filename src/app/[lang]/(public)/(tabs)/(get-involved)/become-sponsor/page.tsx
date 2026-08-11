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
      <p className="text-2xl text-pretty mt-5 text-center">Apoie nosso projeto e participe dessa história! Entre em contato para conhecer melhor as possibilidades de trabalharmos juntos!</p>
      <div className="flex md:flex-row flex-col justify-center md:justify-around mb-10 mt-4">
        <div className="md:w-[45%]">
          <div className="relative">
            <Image src="/assets/images/become-sponsor/image2.jpg" alt="" width={1000} height={1000} className="mt-[60]"/>
          </div>
        </div>
        <div className="md:w-[50%] flex flex-col items-center justify-between gap-5 mt-2 md:mt-0">
          <Image src="/assets/images/become-sponsor/image1.jpg" alt="" width={1000} height={1000} className=""/>
          <Image src="/assets/images/h2/cars/h225.jpg" alt="" width={1000} height={1000} className=""/>
        </div>
      </div>
    </main>
  );
}
