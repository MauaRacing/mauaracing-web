"use client"
import Script from 'next/script'
import { longHaul } from '@/app/ui/fonts/fonts'

export default function Page() {
  return (
    <main className={`bg-white min-h-dvh flex flex-col items-center justify-center gap-3`}>
      <h1 className={`text-6xl mb-2 mt-5 text-center ${longHaul.className} w-[100%]`}>Galeria</h1>
      <div className="mt-5">
        <a data-flickr-embed="true" data-header="true" data-footer="true" href="https://www.flickr.com/photos/infomaua/albums/72177720319357434" title="[31.07 a 04.08.2024] Mauá Racing na 20.ª Competição Formula SAE BRASIL">
          {/* eslint-disable-next-line */}
          <img src="https://live.staticflickr.com/65535/53903522817_7a9ab74fbf_z.jpg" width="640" height="480" alt="[31.07 a 04.08.2024] Mauá Racing na 20.ª Competição Formula SAE BRASIL" />
        </a>
      </div>
      <div className="mt-5">
        <a data-flickr-embed="true" data-header="true" data-footer="true" href="https://www.flickr.com/photos/infomaua/albums/72177720319356964" title="[31.07 a 04.08.2024] Mauá Racing H2 na SAE BRASIL &amp; BALLARD Student H2 Challenge">
          {/* eslint-disable-next-line */}
          <img src="https://live.staticflickr.com/65535/53904369651_06621e7d4c_z.jpg" width="640" height="480" alt="[31.07 a 04.08.2024] Mauá Racing H2 na SAE BRASIL &amp; BALLARD Student H2 Challenge" />
        </a>
      </div>
      <div className="mt-5 mb-10">
        <a data-flickr-embed="true" data-header="true" data-footer="true" href="https://www.flickr.com/photos/infomaua/albums/72177720310335290" title="[02 a 06.08.2023] Mauá na 19.ª Competição Fórmula SAE Brasil e 2.ª competição H2 Challenge SAE">
          {/* eslint-disable-next-line */}
          <img src="https://live.staticflickr.com/65535/53101523182_3f621b993d_z.jpg" width="640" height="480" alt="[02 a 06.08.2023] Mauá na 19.ª Competição Fórmula SAE Brasil e 2.ª competição H2 Challenge SAE" />
        </a>
        <Script async src="//embedr.flickr.com/assets/client-code.js" />
      </div>
    </main>
  )
}
