import { longHaul } from "@/app/ui/fonts/fonts";
import Image from "next/image";
import { Figtree } from "next/font/google";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { LangDictionary } from "@/app/[lang]/langDictionary";

const figtree = Figtree({subsets : ["latin"], weight: "400"});

export default async function Page({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang;
  const dict: LangDictionary = await getDictionary(lang);
  return (
    <main className={`min-h-dvh grid grid-cols-4 bg-[#e1e4e6] gap-2${figtree.className}`}>
      <div className="col-span-4 md:col-span-2 flex flex-col justify-center mb-5">
        <h1 className={`text-6xl my-2 text-center ${longHaul.className}`}>{dict.contact.title}</h1>
      </div>
      <div className="col-span-4 md:col-span-2 my-5 flex justify-center items-center">
        <Image src="/assets/images/contact/image1.jpg" alt="" width={1000} height={1000}/>
      </div>
    </main>
  );
}
