import Link from "next/link";
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
      <h1 className={`text-6xl mt-5 text-center ${longHaul.className}`}>
        Seja um membro
      </h1>
      <div className="flex flex-row justify-around">
        <div className="w-[50%] flex items-center">
          <Image src="/assets/images/become-member/image1.jpg" alt="" width={1000} height={1000} className="ml-4"/>
        </div>
        <form className="w-[42%] bg-red-700 flex flex-col mr-6 py-5">
          <label className="block mt-7 ml-5">
            <span className="block font-medium">Nome Completo</span>
            <input type="text" className="mt-1 block px-3 py-2 text-sm shadow-sm bg-transparent outline-none border-b-2 border-black w-[87.5%]"/>
          </label>
          <label className="block mt-7 ml-5">
            <div className="inline-block mr-6">
            <span className="font-medium">Curso</span>
            <input type="text" className="mt-1 block px-3 py-2 text-sm shadow-sm bg-transparent outline-none border-b-2 border-black"/>
            </div>
            <div className="inline-block">
              <span className="font-medium">Semestre</span>
              <input type="text" className="mt-1 block px-3 py-2 text-sm shadow-sm bg-transparent outline-none border-b-2 border-black"/>
            </div>
          </label>
          <label className="block mt-7 ml-5">
            <span className="block font-medium">Email</span>
            <input type="text" className="mt-1 block px-3 py-2 text-sm shadow-sm bg-transparent outline-none border-b-2 border-black w-[87.5%]"/>
          </label>
          <label className="block mt-7 ml-5">
            <span className="block font-medium">Mensagem</span>
            <input type="text" className="mt-1 block px-3 py-2 text-sm shadow-sm bg-transparent outline-none border-b-2 border-black w-[87.5%]"/>
          </label>
          <label className="block mt-7 ml-5 flex justify-center">
            <button className="bg-black text-white py-2 px-4">
                  Enviar
            </button>
          </label>
        </form>
      </div>
    </main>
  );
}
