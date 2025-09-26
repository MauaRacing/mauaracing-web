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
        Seja um patrocinador
      </h1>
      <div className="flex flex-row justify-around mb-10 mt-2">
        <div className="w-[45%]">
          <form className="bg-red-700 flex flex-col mr-6 py-5">
            <label className="block mt-7 ml-5">
              <span className="block font-medium">Primeiro Nome</span>
              <input type="text" className="mt-1 block px-3 py-2 text-sm shadow-sm bg-transparent outline-none border-b-2 border-black w-[87.5%]"/>
            </label>
            <label className="block mt-7 ml-5">
              <span className="block font-medium">Último Nome</span>
              <input type="text" className="mt-1 block px-3 py-2 text-sm shadow-sm bg-transparent outline-none border-b-2 border-black w-[87.5%]"/>
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
          <div className="relative">
            <Image src="/assets/images/become-sponsor/image2.jpg" alt="" width={1000} height={1000} className="mt-[60]"/>
          </div>
        </div>
        <div className="w-[50%] flex flex-col items-center mt-5 gap-5">
          <Image src="/assets/images/become-sponsor/image1.jpg" alt="" width={1000} height={1000} className=""/>
          <div className="border border-4 border-red-800 border-t-black border-l-black p-2 mt-7">
            <h2 className="text-6xl text-red-800 ml-5">Gold</h2>
            <p className="ml-5">Pretium, nibh ipsum consequat nisl, vel pretium lectus quam id leo in vitae turpis massa sed elementum! Nunc scelerisque viverra mauris, in aliquam sem fringilla ut morbi tincidunt augue interdum!</p>
          </div>
          <div className="border border-4 border-red-800 border-b-black border-r-black p-2 mt-7">
            <h2 className="text-6xl text-black text-right mr-5">Silver</h2>
            <p className="mr-5 text-right">Pretium, nibh ipsum consequat nisl, vel pretium lectus quam id leo in vitae turpis massa sed elementum! Nunc scelerisque viverra mauris, in aliquam sem fringilla ut morbi tincidunt augue interdum!</p>
          </div>
          <div className="border border-4 border-red-800 border-t-black border-l-black p-2 mt-7">
            <h2 className="text-6xl text-red-800 ml-5">Bronze</h2>
            <p className="ml-5">Pretium, nibh ipsum consequat nisl, vel pretium lectus quam id leo in vitae turpis massa sed elementum! Nunc scelerisque viverra mauris, in aliquam sem fringilla ut morbi tincidunt augue interdum!</p>
          </div>
        </div>
      </div>
    </main>
  );
}
