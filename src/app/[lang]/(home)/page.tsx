import Image from "next/image";
import bg from "public/images/79.jpg"
import { NavMenu } from "@/app/components/navMenu";
import { NavBar } from "@/app/components/navBar";
import { Footer } from "@/app/components/footer";
import { getDictionary } from "../dictionaries";
import { LangDictionary } from "../langDictionary";


export default async function Home({
  params,
} : {
  params : Promise<{lang : string}>
}) {
  const lang = (await params).lang;
  const dict : LangDictionary = await getDictionary(lang);
  return (
    <div className="flex flex-col relative">
      <main className={`flex justify-center min-h-dvh lg:h-[130dvh]`}>
        <Image className="-z-10 object-cover " src={bg} fill alt="" />
        <div className="bg-transparent flex flex-col mt-12 lg:mt-0">
          <div className="h-24 flex flex-col md:justify-between gap-4 my-2 justify-center">
            <div className="flex items-center justify-center">
              <NavMenu dict={dict} className="md:hidden flex" dialogColor="bg-transparent" fontColor="text-black"/>
              <Image
                src={"/logoMR_whitebg.png"}
                width={210}
                height={210}
                alt="Logo Mauá Racing"
                className="ml-3"
                priority={true}
              />
            </div>
            <NavBar dict={dict} className="hidden md:block" dialogColor="bg-transparent" fontColor="text-black"/>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
