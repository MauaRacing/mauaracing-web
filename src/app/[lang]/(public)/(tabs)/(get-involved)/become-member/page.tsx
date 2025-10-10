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
    <main className="min-h-dvh flex flex-col items-center bg-[#e1e4e6]">
      <h1 className={`text-6xl text-center ${longHaul.className} p-2 w-full mt-2`}>
        Seja um membro
      </h1>
      <div className="flex flex-col md:flex-row justify-around mt-2 items-center">
        <div className="md:w-[50%] flex items-center order-2 md:order-1">
          <Image src="/assets/images/become-member/image1.jpg" alt="" width={1000} height={1000} className="md:ml-4 mb-4 md:mb-0"/>
        </div>
        <form className="md:w-[42%] flex flex-col md:mr-6 py-5 border-2 border-red-800 rounded-2xl order-1 md:order-2 md:mt-0 mt-2 mb-5">
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
