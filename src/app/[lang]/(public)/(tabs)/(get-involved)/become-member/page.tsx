import { longHaul } from "@/app/ui/fonts/fonts";
import { Figtree } from "next/font/google";
import Image from "next/image";

const figtree = Figtree({subsets : ["latin"], weight: "400"});

export default function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  return (
    <main className="min-h-dvh flex flex-col items-center bg-[#e1e4e6]">
      <h1 className={`text-6xl text-center ${longHaul.className} p-2 w-full mt-2`}>
        Seja um membro
      </h1>
      <div className="flex flex-col md:flex-row justify-around mt-2 items-center">
        <div className="md:w-[50%] flex items-center order-2 md:order-1">
          <Image src="/assets/images/become-member/image1.jpg" alt="" width={1000} height={1000} className="md:ml-4 mb-4 md:mb-0"/>
        </div>
      </div>
    </main>
  );
}
