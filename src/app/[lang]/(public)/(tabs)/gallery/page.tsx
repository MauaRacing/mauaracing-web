"use client"
import Script from 'next/script'
import { longHaul } from '@/app/ui/fonts/fonts'

export default function Page() {
  return (
    <main className={`min-h-dvh flex flex-col items-center justify-center bg-[#e1e4e6]`}>
      <Script async src="//embedr.flickr.com/assets/client-code.js" />
      <h1 className={`text-6xl text-center ${longHaul.className} w-[100%] py-3 mt-2`}>Galeria</h1>
      <div className="">
        <a data-flickr-embed="true" href="https://www.flickr.com/photos/infomaua/54699965915/in/album-72177720328163823" title="[30.07 a 03.08.2025] Mauá Racing na 21.ª Competição Fórmula SAE Brasil"><img src="https://live.staticflickr.com/65535/54699965915_264c640f6c_4k.jpg" width="3840" height="2560" alt="[30.07 a 03.08.2025] Mauá Racing na 21.ª Competição Fórmula SAE Brasil"/></a>
      </div>
      <div className="mt-5">
        <a data-flickr-embed="true" href="https://www.flickr.com/photos/infomaua/53904671538/in/album-72177720319357434" title="[31.07 a 04.08.2024] Mauá Racing na 20.ª Competição Formula SAE BRASIL"><img src="https://live.staticflickr.com/65535/53904671538_b87acd36b6_6k.jpg" width="6144" height="4096" alt="[31.07 a 04.08.2024] Mauá Racing na 20.ª Competição Formula SAE BRASIL"/></a>
      </div>
    </main>
  )
}
