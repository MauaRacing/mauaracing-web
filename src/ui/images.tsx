"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

export function Images() {
  return (
    <Carousel className="w-auto"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,

      }}>
      <CarouselContent>
        <CarouselItem>
          <Image className="w-[100%] h-auto aspect-video" src={"/images/37.jpg"} width={7110} height={4000} alt="" />
        </CarouselItem>
        <CarouselItem>
          <Image className="w-[100%] h-auto aspect-video" src={"/images/69.jpg"} width={7110} height={4000} alt="" />
        </CarouselItem>
        <CarouselItem>
          <Image className="w-[100%] h-auto aspect-video" src={"/images/79.jpg"} width={7110} height={4000} alt="" />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}