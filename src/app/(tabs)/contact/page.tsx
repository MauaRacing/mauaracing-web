
export default function Page() {
  return (
    <main className="min-h-dvh grid grid-cols-3">
      <div className="col-span-3 md:col-span-2 flex-col justify-center my-5 border-r space-y-10">
        <h1 className="text-6xl my-2 text-center underline underline-offset-8 decoration-solid ">Contato</h1>
        <form className="flex flex-col space-y-3 ml-8">
          <label className="block">
            <span className="block">Nome</span>
            <input type="text" className="border-b-black border-b-2 outline-none"/>
          </label>
          <label className="block">
            <span className="block">Sobrenome</span>
            <input type="text" className="border-b-black border-b-2 outline-none"/>
          </label>
          <label className="block">
            <span className="block">Email</span>
            <input type="email" className="peer font-medium border-b-black border-b-2 outline-none"/>
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Insira um email válido.
            </p>
          </label>
          <label className="block">
            <span className="block">Mensagem</span>
            <textarea className="border-b-black border-b-2 outline-none"/>
          </label>
        </form>
      </div>
      <div className="col-span-3 md:col-span-1 my-5 flex justify-center">
        <h1></h1>
      </div>
    </main>
  );
}