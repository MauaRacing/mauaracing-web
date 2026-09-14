import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang;
  return (
    <div className="flex flex-col place-content-center items-center content-center w-full h-screen bg-surface gap-3">
      <Link
        href={`/${lang}/dashboard/taxonomy/create-files`}
        className="bg-blue-500  p-5 rounded-lg text-onPrimary text-center w-64"
      >
        Criar parts/assemblies
      </Link>
      <Link
        href={`/${lang}/dashboard/taxonomy/files`}
        className="bg-blue-500 p-5 rounded-lg text-onPrimary text-center w-64"
      >
        Ver parts/assemblies
      </Link>
    </div>
  );
}
