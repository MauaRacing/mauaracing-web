import Image from "next/image";
import formulaImage from "public/assets/images/79.jpg";
import h2Image from "public/assets/images/h2/h2BG.jpg";
import bajaImage from "public/assets/images/baja/bajaBG.jpg"
import { getDictionary } from "@/[lang]/dictionaries";
import { LangDictionary } from "@/[lang]/langDictionary";
import { Figtree } from "next/font/google";
import Link from "next/link";
import { longHaul } from "@/app/ui/fonts/fonts";

const figtree = Figtree({ subsets: ["latin"], weight: "600" });

export default async function Home({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const lang = (await params).lang;
    const dict: LangDictionary = await getDictionary(lang);
    return (
        <div className="flex flex-col relative">
            <main className={`flex flex-col items-center group/main`}>
                <div className="grid grid-cols-1 md:grid-cols-3 group/images">
                    <div className="group/formula relative">
                      <Image src={formulaImage} alt="Equipe Formula" className="-z-20 col-span-1  md:h-dvh md:object-cover" />
                      <div className="absolute top-8 h-10 align-items w-full">
                        <div className="text-center text-white text-md font-extrabold">
                          <div className="bg-black/60 mx-auto w-fit flex flex-row gap-2 items-center justify-center py-1 px-4">
                            <p className={`${longHaul.className}`}>SAE IC</p>
                          </div>
                        </div>
                      </div>
                        <div className="absolute bottom-8 h-10 align-items w-full">
                            <div className="text-center text-white text-md font-extrabold">
                                <div className="bg-black/60 mx-auto w-fit flex flex-row gap-2 items-center justify-center py-1 px-4">
                                  <Link href={`${lang}/formula`} className={`${longHaul.className}`}>{dict.homepage.findOut}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group/h2 relative">
                      <Image src={h2Image} alt="Equipe H2" className="-z-20 col-span-1  md:h-dvh md:object-cover" />
                      <div className="absolute top-8 h-10 align-items w-full">
                        <div className="text-center text-white text-md font-extrabold">
                          <div className="bg-black/60 mx-auto w-fit flex flex-row gap-2 items-center justify-center py-1 px-4">
                            <p className={`${longHaul.className}`}>SAE H2 Challenge</p>
                          </div>
                        </div>
                      </div>
                        <div className="absolute bottom-8 h-10 align-items w-full">
                            <div className="text-center text-white text-md font-extrabold">
                                <div className="bg-black/60 mx-auto w-fit flex flex-row gap-2 items-center justify-center py-1 px-4">
                                  <Link href={`${lang}/h2`} className={`${longHaul.className}`}>{dict.homepage.findOut}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group/baja relative">
                      <Image src={bajaImage} alt="Equipe Baja" className="-z-20 col-span-1 md:h-dvh md:object-cover" />
                      <div className="absolute top-8 h-10 align-items w-full">
                        <div className="text-center text-white text-md font-extrabold">
                          <div className="bg-black/60 mx-auto w-fit flex flex-row gap-2 items-center justify-center py-1 px-4">
                            <p className={`${longHaul.className}`}>SAE Baja</p>
                          </div>
                        </div>
                      </div>
                        <div className="absolute bottom-8 h-10 align-items w-full">
                            <div className="text-center text-white text-md font-extrabold">
                                <div className="bg-black/60 mx-auto w-fit flex flex-row gap-2 items-center justify-center py-1 px-4">
                                  <Link href={`${lang}/baja`} className={`${longHaul.className}`}>{dict.homepage.findOut}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
