import { CarCard } from "@/ui/carCard";
import mr25Image from "public/assets/images/cars/MR25.jpg";
import mr24Image from "public/assets/images/cars/MR24.png";
import mr23Image from "public/assets/images/cars/MR23.jpg";
import mr22Image from "public/assets/images/cars/MR22.png";
import mr19Image from "public/assets/images/cars/MR19.png";
import mr18Image from "public/assets/images/cars/MR18.png";
import mr17Image from "public/assets/images/cars/MR17.jpg";
import bg from "public/assets/images/cars/bg.svg";
import bgMobile from "public/assets/images/cars/bgMobile2.svg"
import { longHaul } from "@/app/ui/fonts/fonts";
import Image from "next/image";
import { Figtree } from "next/font/google";

const figtree = Figtree({subsets : ["latin"], weight: "300"});


export default function Page() {
  return (
    <main className={`min-h-dvh relative ${figtree.className}`}>
      <div className="absolute h-[100%] hidden lg:inline">
        <Image src={bg} alt="" className={`sticky top-0 w-dvw z-[0]`}/>
      </div>
      <div className="absolute h-[100%] lg:hidden">
        <Image src={bgMobile} alt="" className={`sticky top-0 w-dvw z-[0]`}/>
      </div>
      <div className="z-[20] flex flex-col items-center relative ">
      <h1 className={`text-6xl mt-5 text-center ${longHaul.className}`}>
        Carros
      </h1>
      <div className="mt-8 mb-4 w-[100%] lg:w-[90%] space-y-4">
        <CarCard.Root year="25" alignment="left">
          <CarCard.Image alt="" src={mr25Image}/>
          <CarCard.Text>
            <CarCard.Description alignment={"left"}>
              <div className={``}>
                <p className="font-medium">Formula SAE Brasil 2025</p>
                <ul className="list-disc list-inside ml-4">
                  <li>2° Lugar Geral</li>
                  <li>2° Lugar Aceleração</li>
                  <li>2° Lugar AutoX</li>
                  <li>2° Lugar Enduro</li>
                  <li>3° Lugar Eficiência</li>
                  <li>3° Lugar Skidpad</li>
                </ul>
              </div>
            </CarCard.Description>
          </CarCard.Text>
        </CarCard.Root>
        <CarCard.Root year="24" alignment="right">
          <CarCard.Text>
            <CarCard.Description alignment={"right"}>
              <div className={``}>
                <p className="font-medium">Formula SAE Michigan 2024</p>
                <ul className="list-disc text-justify">
                  <li>1º Lugar em Design</li>
                  <li>7º Lugar Mundial</li>
                  <li>Excelente desempenho nas provas estáticas</li>
                  <li>Record Nacional FSAE IC</li>
                </ul>
              </div>
              <div className={``}>
                <p className="font-medium">Formula SAE Brasil 2024</p>
                <ul className="list-disc ">
                  <li>2º Skidpad</li>
                  <li>2º Aceleração</li>
                  <li>2º AutoX</li>
                </ul>
              </div>
            </CarCard.Description>
          </CarCard.Text>
          <CarCard.Image alt="" src={mr24Image} />
        </CarCard.Root>
        <CarCard.Root year="23" alignment="left">
          <CarCard.Image alt ="" src={mr23Image}/>
          <CarCard.Text>
            <CarCard.Description alignment={"left"}>
              <div>
                <p className="font-medium">Formula SAE Brasil 2023</p>
                <ul className="list-disc list-inside ml-4">
                  <li>2º Lugar Geral</li>
                  <li>1º Lugar Enduro</li>
                  <li>1º Lugar Aceleração</li>
                  <li>1º Lugar AutoX</li>
                  <li>2º Lugar Skid Pad</li>
                  <li>Vaga para a competição <br></br>mundial na cidade de Lincoln, EUA</li>
                </ul>
              </div>
            </CarCard.Description>
          </CarCard.Text>
        </CarCard.Root>
        <CarCard.Root year="22" alignment="right">
          <CarCard.Text>
            <CarCard.Description alignment={"right"}>
              <div className="">
                <p className="font-medium">Formula SAE Brasil 2022</p>
                <ul className="list-disc list-inside ml-4">
                  <li>3° Lugar Aceleração</li>
                  <li>6° Lugar Skidpad</li>
                  <li>10° Overall</li>
                </ul>
              </div>
            </CarCard.Description>
          </CarCard.Text>
          <CarCard.Image alt="" src={mr22Image} className=""/>
        </CarCard.Root>
        <CarCard.Root year="19" alignment="left">
          <CarCard.Image alt="" src={mr19Image} />
          <CarCard.Text>
            <CarCard.Description alignment={"left"}>
              <div>
                <p className="font-medium">Formula SAE Brasil 2019</p>
                <ul className="list-disc list-inside ml-4">
                  <li>3° Lugar Design</li>
                  <li>3° Lugar Enduro</li>
                  <li>3° Lugar Eficiência</li>
                  <li>2° Lugar Skidpad</li>
                  <li>1° Lugar Aceleração</li>
                  <li>2° Lugar Geral</li>
                </ul>
              </div>
              <br/>
              <div>
                <p className="font-medium">Formula SAE Lincoln 2019</p>
                <ul className="list-disc list-inside ml-4">
                  <li>8° Lugar Design</li>
                  <li>49° Lugar Mundial</li>
                </ul>
              </div>
            </CarCard.Description>
          </CarCard.Text>
        </CarCard.Root>
        <CarCard.Root year="18" alignment="right">
          <CarCard.Text>
            <CarCard.Description alignment={"right"}>
              <div>
                <p className="font-medium">Formula SAE Brasil 2018</p>
                <ul className="list-disc list-inside ml-4">
                  <li>2° Lugar Geral</li>
                  <li>1° Lugar Skidpad</li>
                  <li>1° Lugar Eficiência</li>
                  <li>2° Lugar Aceleração</li>
                  <li>3° Lugar Projeto</li>
                </ul>
              </div>
            </CarCard.Description>
          </CarCard.Text>
          <CarCard.Image alt="" src={mr18Image} />
        </CarCard.Root>
        <CarCard.Root year="17" alignment="left">
          <CarCard.Image alt="" src={mr17Image}/>
          <CarCard.Text>
            <CarCard.Description alignment={"left"}>
              <div>
                <p className="font-medium">Formula SAE Brasil 2017</p>
                <ul className="list-disc list-inside ml-4">
                  <li>4° Lugar na Presentation</li>
                  <li>5° Lugar no Skidpad</li>
                  <li>7° Lugar no AutoX</li>
                  <li>Ótimo desempenho na pista</li>
                  <li>9° Lugar Overall</li>
                </ul>
              </div>
            </CarCard.Description>
          </CarCard.Text>
        </CarCard.Root>
      </div>
      </div>
    </main>
  );
}





