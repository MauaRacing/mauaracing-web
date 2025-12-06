import { CarCard } from "@/ui/carCard";
import mr25Image from "public/assets/images/cars/MR25.jpg";
import mr24Image from "public/assets/images/cars/MR24.png";
import mr23Image from "public/assets/images/cars/MR23.jpg";
import mr22Image from "public/assets/images/cars/MR22.png";
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
        <CarCard.Root year="25" alignment="left" team="Baja">
          <CarCard.Image alt="" src={mr25Image}/>
          <CarCard.Text>
            <CarCard.Description alignment={"left"}>
              <div className={``}>
                <p className="font-medium">Baja Sudeste 2025</p>
                <ul className="list-disc list-inside ml-4">
                  <li>18º Lugar Geral</li>
                  <li>11° Lugar Enduro</li>
                </ul>
              </div>
            </CarCard.Description>
          </CarCard.Text>
        </CarCard.Root>
        <CarCard.Root year="22" alignment="right" team="Baja">
          <CarCard.Text>
            <CarCard.Description alignment={"right"}>
              <div className={``}>
                <p className="font-medium">Baja Sudeste 2022</p>
                <ul className="list-disc ">
                  <li>17º Lugar Geral</li>
                  <li>6º Lugar Aceleração</li>
                  <li>10º Lugar Enduro</li>
                </ul>
              </div>
            </CarCard.Description>
          </CarCard.Text>
          <CarCard.Image alt="" src={mr24Image} />
        </CarCard.Root>
        <CarCard.Root year="19" alignment="left" team="Baja">
          <CarCard.Image alt ="" src={mr23Image}/>
          <CarCard.Text>
            <CarCard.Description alignment={"left"}>
              <div>
                <p className="font-medium">Baja Sudeste 2019</p>
                <ul className="list-disc list-inside ml-4">
                  <li>21º Lugar Geral</li>
                  <li>6º Lugar Aceleração</li>
                  <li>15º Lugar Enduro</li>
                </ul>
              </div>
            </CarCard.Description>
          </CarCard.Text>
        </CarCard.Root>
        <CarCard.Root year="17" alignment="right" team="Baja">
          <CarCard.Text>
            <CarCard.Description alignment={"right"}>
              <div>
                <p className="font-medium">Baja Sudeste 2017</p>
                <ul className="list-disc list-inside ml-4">
                  <li>16° Lugar Geral</li>
                  <li>13º Lugar Enduro</li>
                </ul>
              </div>
            </CarCard.Description>
          </CarCard.Text>
          <CarCard.Image alt="" src={mr22Image} className=""/>
        </CarCard.Root>
      </div>
      </div>
    </main>
  );
}





