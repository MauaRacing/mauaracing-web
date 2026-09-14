import { getDictionary } from "@/app/[lang]/dictionaries";
import { LangDictionary } from "@/app/[lang]/langDictionary";
import { longHaul } from "@/app/ui/fonts/fonts";
import { ImageSponsor } from "@/app/ui/imageSponsor";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  {
    params,
  }: { params: Promise<{ lang: string }>},
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const lang = (await params).lang;
  const dict : LangDictionary = await getDictionary(lang);
  return {
    title: dict.navbar.aboutGroup.thirdOption
  }
}

export default async function Page({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang;
  const dict: LangDictionary = await getDictionary(lang);
  return (
    <main className="min-h-dvh flex flex-col items-center bg-[#e1e4e6]">
      <h1 className={`${longHaul.className} text-6xl text-center decoration-solid w-dvw p-2 mt-2`}>{dict.navbar.aboutGroup.thirdOption}</h1>
      <div className="flex w-[90%] gap-6 mt-8 mt-4">
        <div className="grow border border-red-500 h-[50%] self-center"></div>
        <h2 className={`text-6xl text-red-700 ${longHaul.className} text-center`}>Diamond</h2>
        <div className="grow border border-red-500 h-[50%] self-center"></div>
      </div>
      <div className="m-4 flex flex-row justify-center items-center gap-5">
        <ImageSponsor
          href="https://www.maua.br"
          src="/assets/images/sponsors/Maua.svg"
          alt=""
          width={300}
          height={300}
        />
      </div>
        <div className="flex w-[90%] gap-6 mt-4 mb-4">
          <h2 className={`text-6xl text-red-700 ${longHaul.className}`}>Gold</h2>
          <div className="grow border border-red-500 h-[50%] self-center"></div>
        </div>
        <div className="m-4 flex flex-row justify-center items-center gap-5">
          <ImageSponsor
            href="https://www.skf.com/"
            src="/assets/images/sponsors/formula/gold/SKF.svg"
            alt=""
            width={300}
            height={300}/>
          <ImageSponsor
            href="https://www.te.com/"
            src="/assets/images/sponsors/formula/gold/Portofix.svg"
            alt=""
            width={300}
            height={300}
          />
          <ImageSponsor
            href="https://www.te.com/"
            src="/assets/images/sponsors/formula/gold/TE.svg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="flex w-[90%] gap-6 mt-8 mt-4">
          <div className="grow border border-red-500 h-[50%] self-center"></div>
          <h2 className={`text-6xl text-red-700 ${longHaul.className}`}>Silver</h2>
        </div>
      <div className="m-4 flex flex-row justify-center items-center gap-5">
        <ImageSponsor
          href="/"
          src="/assets/images/sponsors/formula/silver/Neyfa.svg"
          alt=""
          width={300}
          height={300}/>
        <ImageSponsor
          href="/"
          src="/assets/images/sponsors/formula/silver/Tabano.svg"
          alt=""
          width={300}
          height={300}
        />
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/formula/silver/Camillo.svg"
            className=""
            alt=""
            width={300}
            height={300}/>
        </div>
        <div className="m-4 flex flex-row justify-center items-center gap-5">
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/formula/silver/AVL.svg"
            alt=""
            width={300}
            height={300}/>
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/formula/silver/Spaal.svg"
            alt=""
            width={300}
            height={300}
          />
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/formula/silver/Spal.svg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="m-4 flex flex-row justify-center items-center gap-5">
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/formula/silver/Southco.svg"
            alt=""
            width={300}
            height={300}/>
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/formula/silver/SMC.svg"
            alt=""
            width={300}
            height={300}
          />
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/formula/silver/MTE.svg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="m-4 flex flex-row justify-center items-center gap-5">
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/formula/silver/SSAB.svg"
            alt=""
            width={300}
            height={300}/>
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/formula/silver/Magnetron.svg"
            alt=""
            width={300}
            height={300}
          />
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/formula/silver/HBK.svg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="m-4 flex flex-row justify-center items-center gap-12">
          <ImageSponsor
            href="https://curvasemtubos.com.br/"
            src="/assets/images/sponsors/formula/silver/PrumoTech.svg"
            className=""
            alt=""
            width={300}
            height={300}/>
        </div>
      <div className="flex w-[90%] gap-6 mt-8 mb-4">
        <h2 className={`text-6xl text-red-700 ${longHaul.className}`}>Bronze</h2>
        <div className="grow border border-red-500 h-[50%] self-center"></div>
      </div>
        <div className="m-4 flex flex-row justify-center items-center gap-5">
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/formula/bronze/RibeiroElectronErosao.svg"
            alt=""
            width={300}
            height={300}/>
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/formula/bronze/Sunmetais.svg"
            alt=""
            width={300}
            height={300}
          />
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/formula/bronze/Giba.svg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="m-4 flex flex-row justify-center items-center gap-5">
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/formula/bronze/Rocha.svg"
            alt=""
            width={300}
            height={300}/>
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/formula/bronze/FL.svg"
            alt=""
            width={300}
            height={300}
          />
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/formula/bronze/Overland.svg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="m-4 flex flex-row justify-center items-center gap-5">
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/formula/bronze/Remotec.svg"
            alt=""
            width={300}
            height={300}/>
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/formula/bronze/Ansanelli.svg"
            alt=""
            width={300}
            height={300}
          />
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/formula/bronze/MarcosSilva.svg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="m-4 flex flex-row justify-center items-center gap-5">
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/formula/bronze/Mirai.svg"
            alt=""
            width={300}
            height={300}/>
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/formula/bronze/3DEdge.svg"
            alt=""
            width={300}
            height={300}
          />
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/formula/bronze/Marelli.svg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="m-4 flex flex-row justify-center items-center gap-5 mb-8">
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/formula/bronze/Aeron.svg"
            alt=""
            width={300}
            height={300}/>
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/formula/bronze/Tecpads.svg"
            alt=""
            width={300}
            height={300}/>
        </div>
      <div className="flex w-[90%] gap-6 mt-8 mt-4">
        <div className="grow border border-red-500 h-[50%] self-center"></div>
        <h2 className={`text-6xl text-red-700 ${longHaul.className}`}>Sponsor</h2>
      </div>
      <div className="m-4 flex flex-row justify-center items-center gap-5">
        <ImageSponsor
          href="/"
          src="/assets/images/sponsors/formula/sponsor/Cortotal.svg"
          alt=""
          width={300}
          height={300}/>
        <ImageSponsor
          href="/"
          src="/assets/images/sponsors/formula/sponsor/VIGrade.svg"
          alt=""
          width={300}
          height={300}/>
        <ImageSponsor
          href="/"
          src="/assets/images/sponsors/formula/sponsor/Ansys.svg"
          alt=""
          width={300}
          height={300}/>
      </div>
            <div className="m-4 flex flex-row justify-center items-center gap-5">
        <ImageSponsor
          href="/"
          src="/assets/images/sponsors/formula/sponsor/Tilton.svg"
          alt=""
          width={300}
          height={300}/>
        <ImageSponsor
          href="/"
          src="/assets/images/sponsors/formula/sponsor/Wilwood.svg"
          alt=""
          width={300}
          height={300}/>
        <ImageSponsor
          href="/"
          src="/assets/images/sponsors/formula/sponsor/Artik.svg"
          alt=""
          width={300}
          height={300}/>
            </div>
            <div className="m-4 flex flex-row justify-center items-center gap-5">
        <ImageSponsor
          href="/"
          src="/assets/images/sponsors/formula/sponsor/GT.svg"
          alt=""
          width={300}
          height={300}/>
        <ImageSponsor
          href="/"
          src="/assets/images/sponsors/formula/sponsor/Solidworks.svg"
          alt=""
          width={300}
          height={300}/>
        <ImageSponsor
          href="/"
          src="/assets/images/sponsors/formula/sponsor/MetalHorse.svg"
          alt=""
          width={300}
          height={300}/>
            </div>
            <div className="m-4 flex flex-row justify-center items-center gap-5 mb-8">
        <ImageSponsor
          href="/"
          src="/assets/images/sponsors/formula/sponsor/Hoosier.svg"
          alt=""
          width={300}
          height={300}/>
        <ImageSponsor
          href="/"
          src="/assets/images/sponsors/formula/sponsor/Motec.svg"
          alt=""
          width={300}
          height={300}/>
      </div>
    </main>
  );
  
}
