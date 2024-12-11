import { MemberCard } from "@/app/components/memberCard"
import { MemberSubsystem } from "@/app/components/memberSubsystem"

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col items-center gap-3">
      <div className="mt-8">
        <article className="flex flex-col items-center">
          <h1 className="text-6xl my-2 text-center underline underline-offset-8 decoration-solid">Nossa equipe</h1>
          <p className="text-justify text-pretty mx-10 text-2xl leading-relaxed mt-5">Total de membros: 36 (5 adm, 31 projeto)</p>
          <p className="text-justify text-pretty mx-10 text-2xl leading-relaxed mt-5">Total de subsistemas: 13 </p>
        </article>
      </div>
      <div className="my-8">
        
        <MemberSubsystem subsystemName="" >
          <MemberCard name="" imageSrc="" linkedinLink=""/>
        </MemberSubsystem>
        
        <MemberSubsystem subsystemName="ADM DevOps" unique>
          <MemberCard name="" imageSrc="" linkedinLink="" />
        </MemberSubsystem>
      </div>
    </main>
  )
}