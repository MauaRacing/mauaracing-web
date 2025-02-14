import { signIn } from "@/auth";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maua Racing",
};
export default function Page() {
  return (
    <main className="flex justify-center items-center h-dvh w-dvw">
      <div className="border rounded-lg h-[80%] w-[80%] shadow-md p-5">
        <div className="flex justify-center">
          <Link href={"/"}>
            <Image
              src={"/images/logoMR_whitebg.png"}
              width={210}
              height={210}
              alt="Logo Mauá Racing"
              className="ml-3"
              priority={true}
            />
          </Link>
        </div>
        <form
          className="h-[60%] flex justify-center items-center"
          action={async () => {
            "use server";
            await signIn("microsoft-entra-id", { redirectTo: "/dashboard" });
          }}
        >
          <div className="border rounded-md px-2 py-1">
            <button className="flex items-center space-x-2 px-2" type="submit">
              <Image
                src={"/images/login/microsoftLogo.png"}
                width={50}
                height={50}
                alt=""
              />
              <p>Signin with Microsoft</p>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
