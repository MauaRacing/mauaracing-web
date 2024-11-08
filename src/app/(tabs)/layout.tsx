import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { Kanit } from "next/font/google";


import "@/app/globals.css";
import { NavBar } from "@/app/ui/navBar";
import { NavMenu } from "@/app/ui/navMenu";
import { Footer } from "@/app/ui/footer";

const geistSans = localFont({
  src: "./../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./../fonts/GeistMonoVF.woff",
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
          <div className="h-24 flex flex-row lg:justify-between gap-4 my-2 justify-center">
            <NavMenu className="lg:hidden flex" color="white" />
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
              <NavBar className="hidden lg:block text-white" />
            </div>
          </div>
          <div className="h-2 bg-red-500 border-t" />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
