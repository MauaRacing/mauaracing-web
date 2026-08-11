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
    title: dict.bajaTabs.ourTeam.title
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
      <h1 className={`text-6xl text-center ${longHaul.className} w-dvw p-2 mt-2`}>{dict.bajaTabs.ourTeam.title}</h1>
    </main>
  );
}
