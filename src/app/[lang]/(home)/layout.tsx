import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Maua Racing",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>

  );
}
