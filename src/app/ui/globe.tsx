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
    <div className={`flex flex-col md:flex-col  ${className}`}>
      <div className="">
        <button onClick={() => redirectLang(params, pathname, "pt-BR")}>
          <Image
            src={brazilFlag}
            alt=""
            className="inline w-[20px]"
          />
        </button>
      </div>
      <div className="">
        <button onClick={() => redirectLang(params, pathname, "en-US")}>
          <Image
            src={usFlag}
            alt=""
            className="inline w-[20px]"
          />
        </button>
      </div>
      <div className="">
        <button onClick={() => redirectLang(params, pathname, "es-ES")}>
          <Image
            src={spainFlag}
            alt=""
            className="inline w-[20px]"
          />
        </button>
      </div>
    </div>
  );
}
