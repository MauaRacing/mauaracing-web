
export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col items-center gap-3">
      <div className="w-[100%] mt-8">
        <article>
          <div>
            <h1 className="text-6xl my-2 text-center underline underline-offset-8 decoration-solid">O que é FSAE?</h1>
            <p className="text-justify text-pretty indent-11 mx-10 text-2xl leading-relaxed mt-5">
              A Formula SAE (FSAE) é uma competição estudantil organizada pela Associação de Engenheiros Automotivos (SAE), que acontece anualmente em sua versão nacional e internacional. O objetivo é que os alunos projetem e construam um carro tipo fórmula, para depois levá-lo para competir. A competição é composta por provas estáticas e dinâmicas. As estáticas são apresentações e relatórios que não envolvem exclusivamente o funcionamento do carro, tais como custos, apresentação do plano de negócios e projeto de engenharia. Já a etapa dinâmica envolve as provas de aceleração, skidpad, autocross, enduro e eficiência energética.
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}