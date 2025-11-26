import { MemberCard } from "@/ui/memberCard";
import { MemberSubsystem } from "@/ui/memberSubsystem";
import { longHaul } from "@/app/ui/fonts/fonts";
import Link from "next/link";
import Image from "next/image";
import { Figtree } from "next/font/google";

const figtree = Figtree({subsets : ["latin"], weight: "400"});

export default function Page() {
  return (
    <main className={`min-h-dvh flex flex-col items-center bg-[#e1e4e6] ${figtree.className}`}>
      <h1 className={`text-6xl text-center ${longHaul.className} w-dvw p-2 mt-2`}>Nossa Equipe</h1>
    </main>
  );
}
