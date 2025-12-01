"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LangDictionary } from "@/[lang]/langDictionary";
import { NavBarHome } from "./navBarHome";

export function NavMenuHome({
  dict,
  className,
  color,
  dialogColor,
  fontColor,
}: {
  dict: LangDictionary;
  className?: string;
  color?: string;
  dialogColor: string;
  fontColor: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={className}>
      <button className="" onClick={() => setOpen(true)}>
        <Menu className="" onClick={() => setOpen(true)} color={color} />
      </button>
      <dialog
        open={open}
        className="fixed bg-white left-0 inset-y-0 w-[100%] h-dvh z-30"
      >
        <div className="flex flex-col justify-center mt-4 md:mt-0">
          <button onClick={() => setOpen(false)} className="max-w-fit">
            <X />
          </button>
          <div className="mt-5 mx-10">
            <NavBarHome
              dict={dict}
              navMenu={true}
              dialogColor={dialogColor}
              fontColor={fontColor}
            />
          </div>
        </div>
      </dialog>
    </div>
  );
}
