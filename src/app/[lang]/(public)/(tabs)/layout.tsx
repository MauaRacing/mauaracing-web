import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/ui/footer";
import { Globe } from "@/ui/globe";
import { NavBar } from "@/ui/navBar";
import { NavMenu } from "@/ui/navMenu";
import "@/globals.css";
import { getDictionary } from "@/[lang]/dictionaries";

export const metadata: Metadata = {
  title: "Maua Racing",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "en-US" | "pt-BR" | "es-ES" }>;
}>) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);
  return (
    <div className="bg-gray-950">
      <header className="bg-transparent flex flex-col sticky top-0 z-50">
        <div className="bg-gray-950 bg-opacity-50">
          <div className="h-24 flex flex-row lg:justify-between gap-4 my-2 justify-center items-center">
            <div className="flex flex-row justify-center items-center">
              <NavMenu
                dict={dict}
                className="lg:hidden flex"
                color="white"
                dialogColor="bg-transparent"
                fontColor="text-black"
              />
              <Link href={`/${lang}`}>
                <Image
                  src={"/assets/images/logoMR_blackbg.png"}
                  width={210}
                  height={210}
                  alt="Logo Maua Racing"
                  className="ml-3"
                />
              </Link>
              <Globe color="white" className="ml-2 lg:ml-10" />
            </div>
            <div className="place-content-center">
              <NavBar
                dict={dict}
                className="hidden lg:inline-block text-white mx-5"
                dialogColor="bg-gray-950"
                fontColor="text-white"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="h-2 bg-red-500 border-t" />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
