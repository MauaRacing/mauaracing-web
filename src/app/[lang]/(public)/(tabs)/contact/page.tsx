"use client"
import { contactAction } from "@/actions/emailActions";
import { FormEvent, useRef } from "react";
import { longHaul } from "@/app/ui/fonts/fonts";
import Image from "next/image";
import { Figtree } from "next/font/google";

const figtree = Figtree({subsets : ["latin"], weight: "400"});

export default function Page() {
  const formRef = useRef<HTMLFormElement>(null);
  function handleSubmit(e : FormEvent) {
    e.preventDefault();
    formRef.current?.requestSubmit();
  }
  return (
    <main className={`min-h-dvh grid grid-cols-4 bg-[#e1e4e6] gap-2${figtree.className}`}>
      <div className="col-span-4 md:col-span-2 flex flex-col justify-center mb-5 mx-2">
        <h1 className={`text-6xl my-2 text-center ${longHaul.className}`}>Contato</h1>
        <form ref={formRef} className="flex flex-col gap-5 md:ml-8 border-2 border-red-800 pl-4 pt-8 pb-10 rounded-2xl" action={contactAction}>
          <label className="block space-y-2">
            <span className="block">Primeiro Nome</span>
            <input type="text" name="firstName" className="border-b-black border-b-2 outline-none w-11/12 indent-1 bg-transparent"/>
          </label>
          <label className="block space-y-2">
            <span className="block">Último Nome</span>
            <input type="text" name="lastName" className="border-b-black border-b-2 outline-none w-11/12 indent-1 bg-transparent"/>
          </label>
          <label className="block space-y-2">
            <span className="block">Email</span>
            <input type="email" name="email" className="peer border-b-black border-b-2 outline-none w-11/12 indent-1 bg-transparent"/>
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Insira um email válido.
            </p>
          </label>
          <label className="block space-y-2">
            <span className="block">Mensagem</span>
            <textarea name="message" className="border-b-black border-b-2 outline-none w-11/12 resize-none indent-1 bg-transparent" rows={2}/>
          </label>
          <button type="submit" onSubmit={(e) => handleSubmit(e)} className="w-[90%] ml-3 block rounded-md bg-gray-950 text-white mt-8 ">Enviar</button>
        </form>
      </div>
      <div className="col-span-4 md:col-span-2 my-5 flex justify-center items-center">
        <Image src="/assets/images/contact/image1.jpg" alt="" width={1000} height={1000} className="border-4 border-black"/>
      </div>
    </main>
  );
}
