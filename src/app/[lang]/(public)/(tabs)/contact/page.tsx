"use client"
import { contactAction } from "@/actions/contactAction";
import { FormEvent, useRef } from "react";




export default function Page() {
  const formRef = useRef<HTMLFormElement>(null);
  function handleSubmit(e : FormEvent) {
    e.preventDefault();
    formRef.current?.requestSubmit();
  }
  return (
    <main className="bg-white min-h-dvh grid grid-cols-3">
      <div className="col-span-3 md:col-span-2 flex-col justify-center my-5 border-r space-y-10">
        <h1 className="text-6xl my-2 text-center underline underline-offset-8 decoration-solid ">Contato</h1>
        <form ref={formRef} className="flex flex-col space-y-3 ml-8" action={contactAction}>
          <label className="block space-y-1">
            <span className="block">Nome</span>
            <input type="text" name="firstName" className="border-b-black border-b-2 outline-none w-11/12 indent-1"/>
          </label>
          <label className="block space-y-1">
            <span className="block">Sobrenome</span>
            <input type="text" name="lastName" className="border-b-black border-b-2 outline-none w-11/12 indent-1"/>
          </label>
          <label className="block space-y-1">
            <span className="block">Email</span>
            <input type="email" name="email" className="peer border-b-black border-b-2 outline-none w-11/12 indent-1"/>
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Insira um email válido.
            </p>
          </label>
          <label className="block space-y-1">
            <span className="block">Mensagem</span>
            <textarea name="message" className="border-b-black border-b-2 outline-none w-11/12 resize-none indent-1" rows={5}/>
          </label>
          <button type="submit" onSubmit={(e) => handleSubmit(e)} className="w-[90%] ml-3 block rounded-md bg-gray-950 text-white">Enviar</button>
        </form>
      </div>
      <div className="col-span-3 md:col-span-1 my-5 flex justify-center">
        <h1></h1>
      </div>
    </main>
  );
}
