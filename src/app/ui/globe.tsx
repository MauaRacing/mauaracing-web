"use client";

import Image from "next/image";
import { redirect, useParams, usePathname } from "next/navigation";
import brazilFlag from "public/assets/images/BrazilFlag.svg";
import usFlag from "public/assets/images/USFlag.svg";
import spainFlag from "public/assets/images/SpainFlag.svg";

function redirectLang(
  params: { lang: string },
  pathname: string,
  lang: string,
) {
  if (params.lang == lang) {
    return;
  } else {
    const oldPath = pathname.split("/");
    if (oldPath[0] == "") {
      oldPath.shift();
    }
    oldPath.splice(0, 1, lang);
    const newPathname = oldPath.join("/");
    redirect(`/${newPathname}`);
  }
}

export function Globe({
  color,
  className,
}: {
  color: string;
  className?: string;
}) {
  const params = useParams<{ lang: string }>();
  const pathname = usePathname();
  return (
    <div className="ml-2 flex flex-col md:flex-row gap-2">
      <div className="">
        <button onClick={() => redirectLang(params, pathname, "pt-BR")}>
          <Image
            src={brazilFlag}
            alt=""
            className="inline w-[40px]"
          />
        </button>
      </div>
      <div className="">
        <button onClick={() => redirectLang(params, pathname, "en-US")}>
          <Image
            src={usFlag}
            alt=""
            className="inline w-[47px]"
          />
        </button>
      </div>
      <div className="">
        <button onClick={() => redirectLang(params, pathname, "es-ES")}>
          <Image
            src={spainFlag}
            alt=""
            className="inline w-[40px]"
          />
        </button>
      </div>
    </div>
  );
}
