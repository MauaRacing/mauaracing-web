import Link from "next/link";
import Image from "next/image";
import image1 from "public/assets/images/aboutImage.png";
import image2 from "public/assets/images/aboutImage2.png";
import { getDictionary } from "@/[lang]/dictionaries";
import { LangDictionary } from "@/[lang]/langDictionary";
import { longHaul } from "@/app/ui/fonts/fonts";
import { Figtree } from "next/font/google";
import { teamProps } from "@/app/lib/teamProps";
// import { ResolvingMetadata, Metadata } from "next";

// export async function generateMetadata(
//   {
//     params,
//     searchParams,
//   }: { params: Promise<{ lang: string }>; searchParams: string },
//   parent: ResolvingMetadata,
// ): Promise<Metadata> {
//   const lang = (await params).lang;
//   switch (lang) {
//     case "pt-BR":
//       return {
//         title: "Sobre",
//       };
//     case "es-ES":
//       return {
//         title: "Sobre",
//       };
//     default:
//     case "en-US":
//       return {
//         title: "About",
//       };
//   }
// }

const figtree = Figtree({subsets : ["latin"], weight: "400"});

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang;
  const dict: LangDictionary = await getDictionary(lang);
  return (
    <main className="min-h-dvh flex flex-col items-center gap-3 bg-[#e1e4e6]">
      <div className="w-[100%] mt-8">
        <section className="p-4 grid grid-cols-3 mb-5 gap-y-4">
          <div className="col-span-3 lg:col-span-2">
            <div className="flex flex-col justify-center items-center">
              <h1 className={`text-6xl my-2 text-center ${longHaul.className} mt-2`}>
                {dict.aboutGroup.about.title}
              </h1>
              <p className={`mt-5 text-left md:text-justify text-pretty md:indent-11 md:mx-10 text-2xl leading-relaxed w-[90%] ${figtree.className}`}>
                {dict.aboutGroup.about.mainText}
              </p>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-1 m-auto lg:mr-2">
            <div className="relative ">
              <div className="bg-yellow-800 w-[95%] translate-x-8 translate-y-6 h-[95%] top-0 z-10 absolute"></div>
              <Image src={image2} width={1000} height={1000} alt="" className="relative z-20 w-fit"/>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-4 mb-10 w-dvw flex justify-center items-center gap-10 flex-col lg:flex-row">
        <div className="relative flex justify-center">
          <div className="bg-yellow-800 w-[90%] translate-x-4 translate-y-6 sm:translate-x-8 sm:translate-y-8 h-[95%] top-0 z-10 absolute"></div>
          <Image
            src={image1}
            width={500}
            height={400}
            alt=""
            className="sm:ml-3 relative z-20 w-[90%]"
          />
        </div>
        <div className="flex flex-col ml-10">
          <Link
            href={`/${lang}/our-team`}
            className="underline text-2xl text-yellow-800"
          >
            {dict.aboutGroup.about.firstLink}
          </Link>
          <Link
            href="https://www.maua.br/a-maua/visitas"
            className="underline text-2xl text-yellow-800"
          >
            {dict.aboutGroup.about.secondLink}
          </Link>
          <Link
            href={`/${lang}/about-fsae`}
            className="underline text-2xl text-yellow-800"
          >
            {dict.aboutGroup.about.thirdLink}
          </Link>
        </div>
      </div>
    </main>
  );
}
