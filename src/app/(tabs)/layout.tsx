import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { Kanit } from "next/font/google";


import "@/app/globals.css";
import { NavBar } from "@/app/components/navBar";
import { NavMenu } from "@/app/components/navMenu";
import { Footer } from "@/app/components/footer";

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
        className={`${kanit.className} ${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950`}
      >
        <header className="bg-transparent flex flex-col sticky">
          <div className="bg-gray-950 bg-opacity-50">
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
                <NavBar className="hidden lg:inline-block text-white mx-5" />
              </div>
            </div>
          </div>
        </header>
        <div className="h-2 bg-red-500 border-t" />
        <div className="bg-white">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
