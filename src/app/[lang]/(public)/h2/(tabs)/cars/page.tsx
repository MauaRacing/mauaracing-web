import { CarCard } from "@/ui/carCard";
import mr25Image from "public/assets/images/cars/MR25.jpg";
import mr24Image from "public/assets/images/cars/MR24.png";
import { longHaul } from "@/app/ui/fonts/fonts";
import { Figtree } from "next/font/google";

const figtree = Figtree({subsets : ["latin"], weight: "300"});


export default function Page() {
  return (
    <main className={`min-h-dvh mb-2 relative bg-[#e1e4e6] ${figtree.className}`}>
      <div className="z-[20] flex flex-col items-center relative ">
      <h1 className={`text-6xl mt-5 text-center ${longHaul.className}`}>
        Carros
      </h1>
      <div className="mt-8 mb-4 w-[100%] lg:w-[90%] space-y-4">
        <CarCard.Root year="25" alignment="left" team="H2">
          <CarCard.Image alt="" src={mr25Image}/>
          <CarCard.Text>
            <CarCard.Description alignment={"left"}>
              <div className={``}>
                <p className="font-medium">H2 Challenge 2025</p>
                <ul className="list-disc list-inside ml-4">
                  <li>1º Lugar Geral</li>
                </ul>
              </div>
            </CarCard.Description>
          </CarCard.Text>
        </CarCard.Root>
        <CarCard.Root year="24" alignment="right" team="H2">
          <CarCard.Text>
            <CarCard.Description alignment={"right"}>
              <div className={``}>
                <p className="font-medium">H2 Challenge 2024</p>
                <ul className="list-disc text-justify">
                  <li>1º Lugar Geral</li>
                </ul>
              </div>
            </CarCard.Description>
          </CarCard.Text>
          <CarCard.Image alt="" src={mr24Image} />
        </CarCard.Root>
      </div>
      </div>
    </main>
  );
}





