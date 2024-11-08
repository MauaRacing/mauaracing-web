import type { Metadata } from "next";
import localFont from "next/font/local";
import {Kanit} from "next/font/google";


import "@/app/globals.css";

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
        {children}
      </body>
    </html>
  );
}
