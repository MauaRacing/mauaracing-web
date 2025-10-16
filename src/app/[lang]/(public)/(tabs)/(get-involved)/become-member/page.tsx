"use client"
import { longHaul } from "@/app/ui/fonts/fonts";
import { Figtree } from "next/font/google";
import Image from "next/image";
import { FormEvent, useRef } from "react";
import { becomeMemberAction } from "@/app/actions/emailActions";

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
    <main className="min-h-dvh flex flex-col items-center bg-[#e1e4e6]">
      <h1 className={`text-6xl text-center ${longHaul.className} p-2 w-full lg:mt-6 lg:mb-[40px]  `}>
        Seja um membro
      </h1>
      <div className="flex flex-col lg:flex-row justify-around items-center gap-3 lg:gap-7 mx-1 lg:mx-0">
        <div className="lg:w-[55%] flex items-center order-2 lg:order-1">
          <Image src="/assets/images/become-member/image1.jpg" alt="" width={1000} height={1000} className="lg:ml-4 lg:mb-0 border-4 border-red-800 border-b-black border-r-black mb-1"/>
        </div>
        <form ref={formRef}
          action={becomeMemberAction}
          className="lg:w-[44%] flex flex-col lg:mr-6 py-5 border-2 border-red-800 rounded-2xl order-1 lg:order-2 lg:mt-0 mt-2 mb-5 px-10">
          <label className="block mt-7 ml-5">
            <span className="block font-medium">Nome Completo</span>
            <input type="text"
              name="fullName"
              className="mt-1 block px-3 py-2 text-sm shadow-sm bg-transparent outline-none border-b-2 border-black w-[87.5%]"/>
          </label>
          <label className="block mt-7 ml-5">
            <div className="inline-block mr-6">
            <span className="font-medium">Curso</span>
              <input type="text"
                name="course"
                className="mt-1 block px-3 py-2 text-sm shadow-sm bg-transparent outline-none border-b-2 border-black"/>
            </div>
            <div className="inline-block">
              <span className="font-medium">Semestre</span>
              <input type="text"
                name="semester"
                className="mt-1 block px-3 py-2 text-sm shadow-sm bg-transparent outline-none border-b-2 border-black"/>
            </div>
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
      </div>
    </main>
  );
}
