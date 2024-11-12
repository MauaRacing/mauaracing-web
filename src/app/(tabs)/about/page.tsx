import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col items-center gap-3">
      <div className="w-[80%] mt-8">
        <article className="flex flex-col items-center border rounded-2xl p-4 shadow-lg">
          <h1 className="text-2xl my-2 underline underline-offset-1 decoration-solid">Quem Somos</h1>
          <p className="text-justify text-pretty indent-11 mx-10 text-lg leading-relaxed">
            Somos uma equipe de FSAE de alunos do Instituto Mauá de Tecnologia, que tem como objetivo o desenvolvimento de um projeto de carro tipo formula para competição.  A proposta consiste em desenvolver um projeto do zero, construí-lo, testá-lo e, enfim, levá-lo para competir. Embora a competição seja nosso objetivo final, todo o processo nos conduz ao aprendizado em diversas áreas, não só da engenharia e viabilidade do projeto, mas também de trabalho em grupo, organização, convivência, entre outros. Com a estrutura da Mauá, somos capazes de explorar ideias inovadoras na área e aprimorar o projeto a cada ano!
          </p>
        </article>
      </div>
      <div className="mt-4 flex justify-center">
        <div className="flex flex-col">
          <Link href="/about" className="no-underline hover:underline text-sky-600">Conheça a organização da nossa equipe!</Link>
          <Link href="/about" className="no-underline hover:underline text-sky-600">Conheça a Mauá e nossa oficina! </Link>
          <Link href="/about" className="no-underline hover:underline text-sky-600">Conheça a competição!</Link>
        </div>
      </div>
    </main>
  )
}