import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link"
import localFont from "next/font/local";
import {Kanit} from "next/font/google";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const kanit = Kanit({
  subsets: ["latin"],
  weight: "400",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Maua Racing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-gray-950 flex flex-col">
          <div className="h-26 flex flex-row md:justify-between gap-4 my-2 justify-center">
            <Image
              src={"/logoMR.png"}
              width={210}
              height={210}
              alt="Logo Maua Racing"
              className="ml-3"
            />
            <div className="place-content-center">
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger className="bg-red-300"><Menu /></SheetTrigger>
                  <SheetContent className="bg-gray-950 text-white">
                    <SheetHeader className="">
                      <SheetTitle className="border-b text-center text-inherit">
                        <Link href={"/"}>Maua Racing</Link>
                      </SheetTitle>

                      <SheetDescription>

                      </SheetDescription>

                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
              <NavigationMenu className="hidden md:inline-flex">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-inherit text-white hover:border-t-2 border-red-500 rounded-none hover:bg-inherit hover:text-white font-semibold text-lg">QUEM SOMOS</NavigationMenuTrigger>
                    <NavigationMenuContent className="">
                      <Link href={""} legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                          O que é FSAE?
                        </NavigationMenuLink>
                      </Link>
                      <Link href={""} legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                          Nossa equipe
                        </NavigationMenuLink>
                      </Link>
                      <Link href={""} legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                          Patrocinadores
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-inherit text-white hover:border-t-2 border-red-500 rounded-none hover:bg-inherit hover:text-white font-semibold text-lg">CARROS</NavigationMenuTrigger>
                    <NavigationMenuContent>

                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href={""} legacyBehavior passHref>
                      <NavigationMenuLink className={`bg-inherit text-white hover:border-t-2 border-red-500 rounded-none hover:bg-inherit hover:text-white font-semibold text-lg px-2`}>
                        GALERIA
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href={""} legacyBehavior passHref>
                      <NavigationMenuLink className={`bg-inherit text-white hover:border-t-2 border-red-500 rounded-none hover:bg-inherit hover:text-white font-semibold text-lg px-2`}>
                        MÍDIA
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-inherit text-white hover:border-t-2 border-red-500 rounded-none hover:bg-inherit hover:text-white font-semibold text-lg">Participe</NavigationMenuTrigger>
                    <NavigationMenuContent>
                    <Link href={""} legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                          Seja um patrocinador
                        </NavigationMenuLink>
                      </Link>
                      <Link href={""} legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                          Seja um membro
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-inherit text-white hover:border-t-2 border-red-500 rounded-none hover:bg-inherit hover:text-white font-semibold text-lg">Contatos</NavigationMenuTrigger>
                    <NavigationMenuContent></NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="h-2 bg-red-500 border-t" />
        </header>
        {children}
      </body>
    </html>
  );
}
