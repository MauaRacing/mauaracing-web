import { Form } from "./lib/ui/form";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang;
  return (
    <div className="flex place-content-center items-center content-center w-full h-full">
      <Form lang={lang} />
    </div>
  );
}
