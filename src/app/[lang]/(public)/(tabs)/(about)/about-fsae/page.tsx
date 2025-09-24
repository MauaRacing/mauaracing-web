import { getDictionary } from "@/[lang]/dictionaries";
import { LangDictionary } from "@/[lang]/langDictionary";
import { longHaul } from "@/app/ui/fonts/fonts";
import { Figtree } from "next/font/google";

const figtree = Figtree({subsets : ["latin"], weight: "300"});

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang;
  const dict: LangDictionary = await getDictionary(lang);
  return (
    <main className="bg-white min-h-dvh flex flex-col items-center gap-3">
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
      </div>
    </main>
  );
}
