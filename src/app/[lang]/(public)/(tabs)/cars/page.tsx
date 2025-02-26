import { CarCard } from "@/ui/carCard";
import mr24Image from "public/assets/images/cars/MR24.png";
import mr22Image from "public/assets/images/cars/MR22.png";
import mr19Image from "public/assets/images/cars/MR19.png";
import mr18Image from "public/assets/images/cars/MR18.png";

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col items-center gap-3">
      <h1 className="text-6xl my-2 text-center underline underline-offset-8 decoration-solid">
        Carros
      </h1>
      <div className="mt-8 mb-4 w-[100%] lg:w-[90%] space-y-4">
        <CarCard.Root>
          <CarCard.Image alt="" src={mr24Image} />
          <CarCard.Text>
            <CarCard.Title>MR24</CarCard.Title>
            <CarCard.Description>
              <div>
                <p className="font-medium">Formula SAE Michigan 2024</p>
                <ul className="list-disc list-inside ml-4">
                  <li>1º Lugar em Design</li>
                  <li>7º Lugar Mundial</li>
                  <li>Excelente desempenho nas provas estáticas</li>
                  <li>Record Nacional FSAE IC</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">Formula SAE Brasil 2024</p>
                <ul className="list-disc list-inside ml-4">
                  <li>2º Skidpad</li>
                  <li>2º Aceleração</li>
                  <li>2º AutoX</li>
                </ul>
              </div>
            </CarCard.Description>
          </CarCard.Text>
        </CarCard.Root>
        <CarCard.Root>
          <CarCard.Image alt="" src={mr22Image} />
          <CarCard.Text>
            <CarCard.Title>MR22</CarCard.Title>
            <CarCard.Description>
              <div>
                <p className="font-medium">Formula SAE Brasil 2022</p>
                <ul className="list-disc list-inside ml-4">
                  <li>3° Lugar Aceleração</li>
                  <li>6° Lugar Skidpad</li>
                  <li>10° Overall</li>
                </ul>
              </div>
            </CarCard.Description>
          </CarCard.Text>
        </CarCard.Root>
        <CarCard.Root>
          <CarCard.Image alt="" src={mr19Image} />
          <CarCard.Text>
            <CarCard.Title>MR19</CarCard.Title>
            <CarCard.Description>
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
              <div>
                <p className="font-medium">Formula SAE Licoln 2019</p>
                <ul className="list-disc list-inside ml-4">
                  <li>8° Lugar Design</li>
                  <li>49° Lugar Mundial</li>
                </ul>
              </div>
            </CarCard.Description>
          </CarCard.Text>
        </CarCard.Root>
        <CarCard.Root>
          <CarCard.Image alt="" src={mr18Image} />
          <CarCard.Text>
            <CarCard.Title>MR18</CarCard.Title>
            <CarCard.Description>
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
        </CarCard.Root>
      </div>
    </main>
  );
}
