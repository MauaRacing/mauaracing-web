import Image from "next/image"
import Link from "next/link"

type ImageSponsorProps = {
  src : string,
  alt : string,
  className? : string,
  href : string,
  width : number,
  height : number
}

export function ImageSponsor(props : ImageSponsorProps){
  return (
    <Link href={`${props.href}`}>
      <Image
        src={`${props.src}`}
        alt={`${props.alt}`}
        width={props.width}
        height={props.width}
        className={props.className ? props.className : ""}
      />
    </Link>
  )
}
