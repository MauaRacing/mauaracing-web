import Link from "next/link";
// import type { Metadata } from "next";
import Image from "next/image";
import image1 from "public/images/aboutImage.png";
import image2 from "public/images/aboutImage2.png";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { LangDictionary } from "@/app/[lang]/langDictionary";

// export const metadata: Metadata = {
//   title: "Sobre",
// };

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang;
  const dict: LangDictionary = await getDictionary(lang);
  return (
    <main className="min-h-dvh flex flex-col items-center gap-3">
      <div className="w-[100%] mt-8">
        <section className="p-4 grid grid-cols-3 mb-5 gap-y-4">
          <div className="col-span-3 xl:col-span-2">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-6xl my-2 text-center underline underline-offset-8 decoration-solid ">
                {dict.aboutGroup.about.title}
              </h1>
              <p className="mt-5 text-justify text-pretty md:indent-11 mx-10 text-2xl leading-relaxed w-[90%]">
                {dict.aboutGroup.about.mainText}
              </p>
            </div>
          </div>
          <div className="col-span-3 xl:col-span-1 m-auto">
            <Image src={image2} width={600} height={600} alt="" className="" />
          </div>
        </section>
      </div>

      <div className="mt-4 mb-10 w-[100%] flex justify-center items-center gap-10 flex-col xl:flex-row">
        <Image
          src={image1}
          width={500}
          height={400}
          alt=""
          className="ml-3 float-left"
        />
        <div className="flex flex-col ml-10">
          <Link
            href={`/${lang}/our-team`}
            className="no-underline hover:underline text-2xl text-sky-600"
          >
            {dict.aboutGroup.about.firstLink}
          </Link>
          <Link
            href="https://www.maua.br/a-maua/visitas"
            className="no-underline hover:underline text-2xl text-sky-600"
          >
            {dict.aboutGroup.about.secondLink}
          </Link>
          <Link
            href={`/${lang}/about-fsae`}
            className="no-underline hover:underline text-2xl text-sky-600"
          >
            {dict.aboutGroup.about.thirdLink}
          </Link>
        </div>
      </div>
    </main>
  );
}
