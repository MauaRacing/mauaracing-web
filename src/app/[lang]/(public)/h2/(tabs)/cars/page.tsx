import { CarCard } from "@/ui/carCard";
import h224Image from "public/assets/images/h2/cars/h224.jpg";
import h225Image from "public/assets/images/h2/cars/h225.jpg";
import { longHaul } from "@/app/ui/fonts/fonts";
import { Figtree } from "next/font/google";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { LangDictionary } from "@/app/[lang]/langDictionary";
import { Metadata, ResolvingMetadata } from "next";

const figtree = Figtree({subsets : ["latin"], weight: "300"});


export async function generateMetadata(
  {
    params,
  }: { params: Promise<{ lang: string }>},
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const lang = (await params).lang;
  const dict : LangDictionary = await getDictionary(lang);
  return {
    title: dict.h2Tabs.cars.title
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
    <main className={`min-h-dvh mb-2 relative bg-[#e1e4e6] ${figtree.className}`}>
      <div className="z-[20] flex flex-col items-center relative ">
      <h1 className={`text-6xl mt-5 text-center ${longHaul.className}`}>
        {dict.h2Tabs.cars.title}
      </h1>
      <div className="mt-8 mb-4 w-[100%] lg:w-[90%] space-y-4">
        <CarCard.Root year="25" alignment="left" team="H2">
          <CarCard.Image alt="" src={h225Image}/>
          <CarCard.Text>
            <CarCard.Description alignment={"left"}>
              <div className={``}>
                <p className="font-medium">H2 Challenge 2025</p>
                <ul className="list-disc list-inside ml-4">
                  <li>1º Lugar Geral</li>
                </ul>
              </div>
            </CarCard.Description>
          </CarCard.Text>
        </CarCard.Root>
        <CarCard.Root year="24" alignment="right" team="H2">
          <CarCard.Text>
            <CarCard.Description alignment={"right"}>
              <div className={``}>
                <p className="font-medium">H2 Challenge 2024</p>
                <ul className="list-disc text-justify">
                  <li>1º Lugar Geral</li>
                </ul>
              </div>
            </CarCard.Description>
          </CarCard.Text>
          <CarCard.Image alt="" src={h224Image} />
        </CarCard.Root>
      </div>
      </div>
    </main>
  );
}





