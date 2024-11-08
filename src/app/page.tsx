import Image from "next/image";
import bg from "../../public/images/79.jpg"
import Link from "next/link";
import { ChevronDown } from "lucide-react";



export default function Home() {
  return (
    <section className={`flex justify-center`}>
      <Image className="-z-10 object-cover" src={bg} fill alt=""/>
      <div className="bg-transparent absolute flex flex-col top-12 lg:top-0">
        <div className="h-26 flex flex-col md:justify-between gap-4 my-2 justify-center">
          <div className="flex justify-center">
            <Image
              src={"/logoMR_whitebg.png"}
              width={210}
              height={210}
              alt="Logo Maua Racing"
              className="ml-3"
              priority={true}

            />
          </div>
          <div className="place-content-center">
            <nav className="">
              <div className="flex md:flex-row flex-col place-content-center">
                <div className="group">
                  <Link href={"/"} className="px-4 flex flex-row font-semibold text-lg hover:border-t-2 border-red-500 transition-[border] duration-75 ease-out">
                    QUEM SOMOS
                    <ChevronDown className="ml-1 w-4"/>
                  </Link>
                  <div className="hidden bg-white border rounded-md mt-2 group-hover:flex">
                    <div className="flex flex-col justify-center grow pt-1 px-2">
                      <Link href={"/"} className="border-b">O que é FSAE?</Link>
                      <Link href={"/"} className="border-b ">Nossa equipe</Link>
                      <Link href={"/"} className="border-b ">Patrocinadores</Link>
                    </div>
                  </div>
                </div>
                <Link href={"/"} className="px-4 font-semibold text-lg hover:border-t-2 border-red-500">CARROS</Link>
                <Link href={"/"} className="px-4 font-semibold text-lg hover:border-t-2 border-red-500">GALERIA</Link>
                <Link href={"/"} className="px-4 font-semibold text-lg hover:border-t-2 border-red-500">MÍDIA</Link>
                <div className="group">
                  <Link href={"/"} className="px-4 flex flex-row font-semibold text-lg hover:border-t-2 border-red-500 w-44">
                    PARTICIPE
                    <ChevronDown className="ml-1 w-4"/>
                  </Link>
                  <div className="hidden bg-white border rounded-md mt-2 group-hover:flex">
                    <div className="flex flex-col justify-center grow pt-1 px-2 shrink">
                      <Link href={"/"} className="border-b ">Seja um patrocinador</Link>
                      <Link href={"/"} className="border-b ">Seja um membro</Link>
                    </div>
                  </div>
                </div>
                <Link href={"/"} className="px-4 font-semibold text-lg hover:border-t-2 border-red-500">CONTATO</Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
