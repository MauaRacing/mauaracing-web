import Link from "next/link";
import Image from "next/image";
import image1 from "public/images/aboutImage.png"
import image2 from "public/images/aboutImage2.png"

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col items-center gap-3">
      <div className="w-[100%] mt-8">
        <article className="p-4">
          <div className="flex flex-col justify-center mb-5">
            <h1 className="text-6xl my-2 underline underline-offset-8 decoration-solid">Quem Somos</h1>
            <p className="text-justify text-pretty indent-11 mx-10 text-2xl leading-relaxed w-[50%]">
              Somos uma equipe de FSAE de alunos do Instituto Mauá de Tecnologia, que tem como objetivo o desenvolvimento de um projeto de carro tipo formula para competição.  A proposta consiste em desenvolver um projeto do zero, construí-lo, testá-lo e, enfim, levá-lo para competir. Embora a competição seja nosso objetivo final, todo o processo nos conduz ao aprendizado em diversas áreas, não só da engenharia e viabilidade do projeto, mas também de trabalho em grupo, organização, convivência, entre outros. Com a estrutura da Mauá, somos capazes de explorar ideias inovadoras na área e aprimorar o projeto a cada ano!
            </p>
          </div>
            <Image
              src={image2}
              width={600}
              height={600}
              alt="Logo Maua Racing"
              className="ml-3 float-right mt-5 "
            />
          <div className="">
            

          </div>
        </article>
      </div>
      
        <div className="my-4 w-[100%] flex justify-center items-center gap-10">
          <Image
            src={image1}
            width={500}
            height={400}
            alt="Logo Maua Racing"
            className="ml-3 float-left"
          />
          <div className="flex flex-col ml-10">
            <Link href="/about" className="no-underline hover:underline text-2xl text-sky-600">Conheça a organização da nossa equipe!</Link>
            <Link href="/about" className="no-underline hover:underline text-2xl text-sky-600">Conheça a Mauá e nossa oficina! </Link>
            <Link href="/about" className="no-underline hover:underline text-2xl text-sky-600">Conheça a competição!</Link>
          </div>
        </div>
      
    </main>
  )
}