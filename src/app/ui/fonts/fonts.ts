import { Kanit } from "next/font/google";
import localFont from "next/font/local";

export const geistSans = localFont({
  src: "./GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
export const geistMono = localFont({
  src: "./GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const kanit = Kanit({
  subsets: ["latin"],
  weight: "400",
  display: "swap"
});

export const longHaul = localFont({
  src: "./Longhaul.ttf",
  variable : "--font-longhaul",
  weight: "400"
});
