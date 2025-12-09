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
        Seja um apoiador
      </h1>
      <p className="text-2xl text-pretty mt-5 text-center">Apoie nosso projeto e participe dessa história! Entre em contato para conhecer melhor as possibilidades de trabalharmos juntos!</p>
      <div className="flex md:flex-row flex-col justify-center md:justify-around mb-10 mt-4">
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
        <div className="md:w-[50%] flex flex-col items-center justify-between gap-5 mt-2 md:mt-0">
          <Image src="/assets/images/become-sponsor/image1.jpg" alt="" width={1000} height={1000} className=""/>
          <Image src="/assets/images/h2/cars/h225.jpg" alt="" width={1000} height={1000} className=""/>
        </div>
      </div>
    </main>
  );
}
