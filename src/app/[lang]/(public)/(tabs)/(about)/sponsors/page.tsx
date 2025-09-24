import { longHaul } from "@/app/ui/fonts/fonts";
import { ImageSponsor } from "@/app/ui/imageSponsor";

export default function Page() {
  return (
    <main className="bg-white min-h-dvh flex flex-col items-center">
      <h1 className={`${longHaul.className} text-6xl mt-5 text-center decoration-solid bg-red-800 w-[100%] py-4 -mt-2`}>Patrocinadores</h1>
        <div className="flex w-[90%] gap-6 mt-4 mb-4">
          <h2 className={`text-6xl text-red-700 ${longHaul.className}`}>Gold</h2>
          <div className="grow border border-red-500 h-[50%] self-center"></div>
        </div>
        <div className="m-4 flex flex-row justify-center items-center gap-5">
          <ImageSponsor
            href="https://www.skf.com/"
            src="/assets/images/sponsors/SKF.svg"
            alt=""
            width={300}
            height={300}/>
          <ImageSponsor
            href="https://www.te.com/"
            src="/assets/images/sponsors/TE.svg"
            alt=""
            width={300}
            height={300}
          />
          <ImageSponsor
            href="https://www.triumphmotorcycles.com/"
            src="/assets/images/sponsors/Triumph.svg"
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
          src="/assets/images/sponsors/Cortotal.svg"
          alt=""
          width={300}
          height={300}/>
        <ImageSponsor
          href="/"
          src="/assets/images/sponsors/Southco.svg"
          alt=""
          width={300}
          height={300}
        />
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/Neyfa.svg"
            className=""
            alt=""
            width={300}
            height={300}/>
        </div>
        <div className="m-4 flex flex-row justify-center items-center gap-5">
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/Casado.svg"
            alt=""
            width={300}
            height={300}/>
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/SMC.svg"
            alt=""
            width={300}
            height={300}
          />
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/Sunmetais.svg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="m-4 flex flex-row justify-center items-center gap-5">
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/Portofix.svg"
            alt=""
            width={300}
            height={300}/>
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/Remotec.svg"
            alt=""
            width={300}
            height={300}
          />
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/Overland.svg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="m-4 flex flex-row justify-center items-center gap-5">
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/AVL.svg"
            alt=""
            width={300}
            height={300}/>
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/FL.svg"
            alt=""
            width={300}
            height={300}
          />
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/Spaal.svg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="m-4 flex flex-row justify-center items-center gap-12">
          <ImageSponsor
            href="https://curvasemtubos.com.br/"
            src="/assets/images/sponsors/Tabano.svg"
            className=""
            alt=""
            width={300}
            height={300}/>
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/Camillo.svg"
            alt=""
            width={300}
            height={300}
          />
          <ImageSponsor
            href="https://www.metalurgicarocha.com.br/"
            src="/assets/images/sponsors/Rocha.svg"
            className=""
            alt=""
            width={250}
            height={300}
          />
        </div>
      <div className="flex w-[90%] gap-6 mt-8 mb-4">
        <h2 className={`text-6xl text-red-700 ${longHaul.className}`}>Bronze</h2>
        <div className="grow border border-red-500 h-[50%] self-center"></div>
      </div>
        <div className="m-4 flex flex-row justify-center items-center gap-5">
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/Hoosier.svg"
            alt=""
            width={300}
            height={300}/>
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/VIGrade.svg"
            alt=""
            width={300}
            height={300}
          />
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/Wilwood.svg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="m-4 flex flex-row justify-center items-center gap-5">
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/Ansanelli.svg"
            alt=""
            width={300}
            height={300}/>
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/GT.svg"
            alt=""
            width={300}
            height={300}
          />
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/Tilton.svg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="m-4 flex flex-row justify-center items-center gap-5">
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/Artik.svg"
            alt=""
            width={300}
            height={300}/>
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/MetalHorse.svg"
            alt=""
            width={300}
            height={300}
          />
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/FabLab.svg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="m-4 flex flex-row justify-center items-center gap-5">
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/Mirai.svg"
            alt=""
            width={300}
            height={300}/>
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/Solidworks.svg"
            alt=""
            width={300}
            height={300}
          />
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/Ansys.svg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="m-4 flex flex-row justify-center items-center gap-5 mb-8">
          <ImageSponsor
            href="/"
            src="/assets/images/sponsors/MarcosSilva.svg"
            alt=""
            width={300}
            height={300}/>
        </div>
    </main>
  );
  
}
