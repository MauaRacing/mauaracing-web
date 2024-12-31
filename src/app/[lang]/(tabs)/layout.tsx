import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import "@/app/globals.css";
import { NavBar } from "@/app/components/navBar";
import { NavMenu } from "@/app/components/navMenu";
import { Footer } from "@/app/components/footer";
import { getDictionary } from "../dictionaries";



export const metadata: Metadata = {
  title: "Maua Racing",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode,
  params: Promise<{ lang: "en-US" | "pt-BR" | "es-ES" }>
}>) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);
  return (
    <div className="bg-gray-950">
      <header className="bg-transparent flex flex-col sticky top-0">
        <div className="bg-gray-950 bg-opacity-50">
          <div className="h-24 flex flex-row lg:justify-between gap-4 my-2 justify-center">
            <NavMenu dict={dict} className="lg:hidden flex" color="white" dialogColor="bg-transparent" fontColor="text-black" />
            <Link href={"/"}>
              <Image
                src={"/logoMR_blackbg.png"}
                width={210}
                height={210}
                alt="Logo Maua Racing"
                className="ml-3"
              />
            </Link>
            <div className="place-content-center">
              <NavBar dict={dict} className="hidden lg:inline-block text-white mx-5" dialogColor="bg-gray-950" fontColor="text-white" />
            </div>
          </div>
        </div>
      </header>
      <div className="h-2 bg-red-500 border-t" />
      <div className="bg-white">
        {children}
      </div>
      <Footer />
    </div>
  );
}
