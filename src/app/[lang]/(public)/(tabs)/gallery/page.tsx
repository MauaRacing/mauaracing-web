import { getDictionary } from '@/app/[lang]/dictionaries';
import { LangDictionary } from '@/app/[lang]/langDictionary';
import { longHaul } from '@/app/ui/fonts/fonts'
import Gallery from './gallery';

export default async function Page({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang;
  const dict: LangDictionary = await getDictionary(lang);
  return (
    <main className={`min-h-dvh flex flex-col items-center justify-center bg-[#e1e4e6]`}>
      <h1 className={`text-6xl text-center ${longHaul.className} w-[100%] py-3 mt-2`}>{dict.gallery.title}</h1>
      <Gallery/>
    </main>
  )
}
