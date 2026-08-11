import { getDictionary } from "@/app/[lang]/dictionaries";
import { LangDictionary } from "@/app/[lang]/langDictionary";
import { longHaul } from "@/app/ui/fonts/fonts";
import { Metadata, ResolvingMetadata } from "next";
import { Figtree } from "next/font/google";

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
    <main className={`min-h-dvh flex flex-col items-center bg-[#e1e4e6] ${figtree.className}`}>
      <h1 className={`text-6xl text-center ${longHaul.className} w-dvw p-2 mt-2`}>{dict.h2Tabs.ourTeam.title}</h1>
    </main>
  );
}
