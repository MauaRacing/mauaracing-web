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
        href={`/${lang}/dashboard/inventory/create-tools`}
        className="bg-primary p-5 rounded-lg text-onPrimary text-center w-64"
      >
        Criar ferramentas
      </Link>
      <Link
        href={`/${lang}/dashboard/inventory/tools`}
        className="bg-primary p-5 rounded-lg text-onPrimary text-center w-64"
      >
        Ver ferramentas
      </Link>
    </div>
  );
}
