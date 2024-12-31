import { CarCard } from "@/app/components/carCard";
import { CarCardDescription } from "@/app/components/carCardComponents";
import mr24Image from "public/images/cars/MR24.png"

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col items-center gap-3">
      <h1 className="text-6xl my-2 text-center underline underline-offset-8 decoration-solid">Carros</h1>
      <div className="mt-8 w-[100%] lg:w-[90%] space-y-4">
        <CarCard.Root>
          <CarCard.Image alt="" src={mr24Image} />
          <CarCard.Text>
            <CarCard.Title>MR-24</CarCard.Title>
            <CarCardDescription>
              <div>
                <p className="font-medium">Formula SAE Michigan</p>
                <ul className="list-disc list-inside ml-4">
                  <li>1º Lugar em Design</li>
                  <li>7º Lugar Mundial</li>
                  <li>Excelente desempenho nas provas estáticas</li>
                  <li>Record Nacional FSAE IC</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">FSAE Brasil 2024</p>
                <ul className="list-disc list-inside ml-4">
                  <li>2º Skid-pad</li>
                  <li>2º Aceleração</li>
                  <li>2º AutoX</li>
                </ul>
              </div>
            </CarCardDescription>
          </CarCard.Text>
        </CarCard.Root>
        <CarCard.Root>
          {/* <CarCard.Image alt="" src={null} width={300} height={300}/> */}
          <></>
        </CarCard.Root>
      </div>
    </main>
  )
}