import { geistMono, geistSans, kanit } from "../fonts/fonts";

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'pt-BR' }, {lang: "es-ES"}]
}
 
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: 'en-US' | 'pt-BR' | "es-ES" }>
}>) {
  const lang = (await params).lang;
  return (
    <html lang={lang}>
      <body className={`${kanit.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}