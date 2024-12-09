import Image from "next/image"

interface Member{
  imageSrc : string
  name : string
  linkedinLink : string
}

export function MemberCard(
 { name, imageSrc, linkedinLink} :  Member
) {
  return (
    <div className="snap-always snap-center h-60 w-56 border-2 rounded-xl shadow-lg flex flex-row">
      {/* <Image src={`${imageSrc}`} alt=""/> */}
      <p>{name}</p>
      <div className="flex">
        <a href={`${linkedinLink}`}></a>
      </div>
    </div>
  )
}