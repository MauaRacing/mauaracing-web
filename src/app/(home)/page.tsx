import Image from "next/image";
import bg from "public/images/79.jpg"
import { NavMenu } from "@/app/ui/navMenu";
import { NavBar } from "@/app/ui/navBar";
import { Footer } from "@/app/ui/footer";


export default function Home() {
  return (
    <div className="flex flex-col">
      <main className={`flex justify-center h-dvh`}>
        <Image className="-z-10 object-cover" src={bg} fill alt="" />
        <div className="bg-transparent flex flex-col mt-12 lg:mt-0">
          <div className="h-24 flex flex-col md:justify-between gap-4 my-2 justify-center">
            <div className="flex items-center justify-center">
              <NavMenu className="md:hidden flex" />
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
              <NavBar className="hidden md:block" />
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
