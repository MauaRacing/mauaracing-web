import { ReactNode } from "react";

export function MemberSubsystem(
  {
    children,
    subsystemName,
    unique
  }: {
    children: ReactNode
    subsystemName: string
    unique? : boolean
  }
) {
  return (
    <div className="flex flex-col items-center my-10">
      <h1 className="mb-5 text-2xl text-center">{subsystemName}</h1>
      <div className={`relative grid ${unique ?"grid-cols-1" : "grid-cols-2"} gap-x-10`}>
        {children}
      </div>
    </div>
  )

}