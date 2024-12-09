import { ReactNode } from "react";

export function MemberSubsystem(
  {
    children,
    subsystemName
  }: {
    children: ReactNode
    subsystemName: string
  }
) {
  return (
    <div className="flex flex-col items-center">
      <h1>{subsystemName}</h1>
      <div className="relative snap-x snap-mandatory overflow-x-scroll flex">
        {children}
      </div>
    </div>
  )

}