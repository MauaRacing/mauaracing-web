"use client"

import { X } from "lucide-react";
import Image from "next/image";
import { redirect, useParams, usePathname } from "next/navigation";
import { useRef, useState } from "react"

function redirectLang(params: { lang: string }, pathname: string, lang: string) {
  if(params.lang == lang){
    return
  }
  else{
    const oldPath = pathname.split("/");
    if(oldPath[0] == ""){
      oldPath.shift();
    }
    oldPath.splice(0, 1, lang);
    const newPathname = oldPath.join('/');
    redirect(`/${newPathname}`);
  }
}

export function Globe({ color, className }: { color: string, className?: string }) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const params = useParams<{ lang: string }>();
  const pathname = usePathname();
  return (
    <>
      <button className={className} onClick={
        () => {
          setOpen(true);
          dialogRef.current?.focus();
        }
      }>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill={color} viewBox="0 0 16 16" className="">
          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
        </svg>
      </button>
      <dialog ref={dialogRef} open={open} className="" onKeyDown={(e) => { if (e.key == "Escape") setOpen(false) }}>
        <div className="fixed bg-white left-0 inset-y-0 w-[100%] h-dvh lg:w-[75%] lg:h-[90dvh] lg:left-[12.5%] lg:top-[5%] rounded-xl  z-30">
          <div className="flex flex-col justify-center mt-4 md:mt-0">
            <button onClick={() => setOpen(false)} className="max-w-fit">
              <X />
            </button>
            <div className="mt-5 mx-10 space-y-4">
              <div className="">
                <button onClick={() => redirectLang(params, pathname, "pt-BR")}>
                  <Image src="/images/BrazilFlag.svg" alt="" width={160} height={90} className="inline" />
                  <p className="inline">Português</p>
                </button>
              </div>
              <div className="">
                <button onClick={() => redirectLang(params, pathname, "en-US")}>
                  <Image src="/images/USFlag.svg" alt="" width={160} height={90} className="inline" />
                  <p className="inline">English</p>
                </button>
              </div>
              <div className="">
                <button onClick={() => redirectLang(params, pathname, "es-ES")}>
                  <Image src="/images/SpainFlag.svg" alt="" width={160} height={90} className="inline" />
                  <p className="inline">Español</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  )
}