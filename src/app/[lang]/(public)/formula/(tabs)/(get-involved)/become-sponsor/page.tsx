"use client"
import { longHaul } from "@/app/ui/fonts/fonts";
import { Figtree } from "next/font/google";
import Image from "next/image";
import { FormEvent, useRef } from "react";
import { becomeSponsorAction } from "@/app/actions/emailActions";

const figtree = Figtree({subsets : ["latin"], weight: "400"});

export default function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  function handleSubmit(e : FormEvent) {
    e.preventDefault();
    formRef.current?.requestSubmit();
  }
  return (
    <main className={`min-h-dvh flex flex-col items-center bg-[#e1e4e6] ${figtree.className}`}>
      <h1 className={`text-6xl text-center ${longHaul.className} w-full p-2 mt-2`}>
        Seja um patrocinador
      </h1>
      <div className="flex md:flex-row flex-col justify-center md:justify-around mb-10 mt-2">
        <div className="md:w-[45%]">
          <form ref={formRef}
            action={becomeSponsorAction}
            className="flex flex-col md:mr-6 mx-2 md:mx-0 py-7 border-2 border-red-800 rounded-2xl">
            <label className="block mt-7 ml-5">
              <span className="block font-medium">Primeiro Nome</span>
              <input type="text"
                name="firstName"
                className="mt-1 block px-3 py-2 text-sm shadow-sm bg-transparent outline-none border-b-2 border-black w-[87.5%]"/>
            </label>
            <label className="block mt-7 ml-5">
              <span className="block font-medium">Último Nome</span>
              <input type="text"
                name="lastName"
                className="mt-1 block px-3 py-2 text-sm shadow-sm bg-transparent outline-none border-b-2 border-black w-[87.5%]"/>
            </label>
            <label className="block mt-7 ml-5">
              <span className="block font-medium">Email</span>
              <input type="text"
                name="email"
                className="mt-1 block px-3 py-2 text-sm shadow-sm bg-transparent outline-none border-b-2 border-black w-[87.5%]"/>
            </label>
            <label className="block mt-7 ml-5">
              <span className="block font-medium">Mensagem</span>
              <input type="text"
                name="message"
                className="mt-1 block px-3 py-2 text-sm shadow-sm bg-transparent outline-none border-b-2 border-black w-[87.5%]"/>
            </label>
            <label className="block mt-7 ml-5 flex justify-center">
              <button type="submit"
                onSubmit={(e) => handleSubmit(e)}
                className="bg-black text-white py-2 px-4">
                 Enviar
              </button>
            </label>
          </form>
          <div className="relative">
            <Image src="/assets/images/become-sponsor/image2.jpg" alt="" width={1000} height={1000} className="mt-[60]"/>
          </div>
        </div>
        <div className="md:w-[50%] flex flex-col items-center gap-5 mt-2 md:mt-0">
          <Image src="/assets/images/become-sponsor/image1.jpg" alt="" width={1000} height={1000} className=""/>
          <div className="border border-4 border-red-800 border-t-black border-l-black p-2 mt-7 mx-2 md:mx-0">
            <h2 className="text-6xl text-red-800 ml-5">Gold</h2>
            <p className="ml-5">Pretium, nibh ipsum consequat nisl, vel pretium lectus quam id leo in vitae turpis massa sed elementum! Nunc scelerisque viverra mauris, in aliquam sem fringilla ut morbi tincidunt augue interdum!</p>
          </div>
          <div className="border border-4 border-red-800 border-b-black border-r-black p-2 mt-7 mx-2 md:mx-0">
            <h2 className="text-6xl text-black text-right mr-5">Silver</h2>
            <p className="mr-5 text-right">Pretium, nibh ipsum consequat nisl, vel pretium lectus quam id leo in vitae turpis massa sed elementum! Nunc scelerisque viverra mauris, in aliquam sem fringilla ut morbi tincidunt augue interdum!</p>
          </div>
          <div className="border border-4 border-red-800 border-t-black border-l-black p-2 mt-7 mx-2 md:mx-0">
            <h2 className="text-6xl text-red-800 ml-5">Bronze</h2>
            <p className="ml-5">Pretium, nibh ipsum consequat nisl, vel pretium lectus quam id leo in vitae turpis massa sed elementum! Nunc scelerisque viverra mauris, in aliquam sem fringilla ut morbi tincidunt augue interdum!</p>
          </div>
        </div>
      </div>
    </main>
  );
}
