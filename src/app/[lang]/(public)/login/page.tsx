import { signIn } from "@/auth";
import { Metadata } from "next";
import { AuthError } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login",
};
export default function Page() {
  const SIGNIN_ERROR_URL = "/";
  return (
    <main className="flex justify-center items-center h-dvh w-dvw">
      <div className="border rounded-lg h-[80%] w-[80%] shadow-md p-5">
        <div className="flex justify-center">
          <Link href={"/"}>
            <Image
              src={"/assets/images/logoMR_whitebg.png"}
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
            try{
              await signIn("microsoft-entra-id", { redirectTo: "/dashboard" });
            }catch (error) {
                    // Signin can fail for a number of reasons, such as the user
                    // not existing, or the user not having the correct role.
                    // In some cases, you may want to redirect to a custom error
                    if (error instanceof AuthError) {
                      return redirect(
                        `${SIGNIN_ERROR_URL}?error=${error.type}`
                      );
                    }

                    // Otherwise if a redirects happens Next.js can handle it
                    // so you can just re-thrown the error and let Next.js handle it.
                    // Docs:
                    // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
                    throw error;
                  }
          }}
        >
          <div className="border rounded-md px-2 py-1">
            <button className="flex items-center space-x-2 px-2" type="submit">
              <Image
                src={"/assets/images/login/microsoftLogo.png"}
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
