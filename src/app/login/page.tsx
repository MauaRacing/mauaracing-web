// import { signIn } from "@/auth";
// import { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Maua Racing",
// };
// export default function Page() {
//   return (
//     <main className="flex justify-center items-center h-dvh w-dvw">
//       <div className="border rounded-lg h-[80%] w-[80%] shadow-md p-5">
//         <div className="flex justify-center">
//           <Link href={"/"}>
//             <Image
//               src={"/images/logoMR_whitebg.png"}
//               width={210}
//               height={210}
//               alt="Logo Mauá Racing"
//               className="ml-3"
//               priority={true}
//             />
//           </Link>
//         </div>
//         <form
//           className="h-[60%] flex justify-center items-center"
//           action={async () => {
//             "use server";
//             await signIn("microsoft-entra-id", { redirectTo: "/dashboard" });
//           }}
//         >
//           <div className="border rounded-md px-2 py-1">
//             <button className="flex items-center space-x-2 px-2" type="submit">
//               <Image
//                 src={"/images/login/microsoftLogo.png"}
//                 width={50}
//                 height={50}
//                 alt=""
//               />
//               <p>Signin with Microsoft</p>
//             </button>
//           </div>
//         </form>
//       </div>
//     </main>
//   );
// }




import { redirect } from "next/navigation";
import { signIn, auth, providerMap } from "@/auth";
import { AuthError } from "next-auth";
import {
  ArrowRightIcon,
  AtSymbolIcon,
  ExclamationCircleIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
// import LoginForm from "@/app/ui/login-form";
// import { lusitana } from "../ui/fonts";
import { Button } from "../components/button";
import FsaeLiveLogo from "../components/fsaelive-logo";
// import { useActionState } from "react";


type SearchParams = Promise<{ callbackUrl: string | undefined }>;

// export default async function Page({ params }: { params: Params }) {
// const { searchParams } = await params;
// }

export default async function SignInPage({
  searchParams,
}: {
  // searchParams: { callbackUrl: string | undefined };
  searchParams: SearchParams;
}) {


  const SIGNIN_ERROR_URL = "/";

  const sP = await searchParams;
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-24 w-full items-end rounded-lg bg-gray-900	p-3 md:h-24">
          <div className="w-44 text-white md:w-44">
            <FsaeLiveLogo />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-4">
            {/* <h1 className={`${lusitana.className} mb-3 text-2xl`}>
              Please log in to continue.
            </h1> */}
            {Object.values(providerMap).map((provider) => (
              <form
                key={provider.id}
                className="space-y-3"
                
                action={async () => {
                  "use server";
                  try {
                    await signIn(provider.id, {
                      redirectTo: sP?.callbackUrl ?? "",
                    });
                  } catch (error) {
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
                <Button className="mt-4 w-full h-14"
                >
                   <p className="text-lg">Sign-in with {" "}{provider.name}</p>
                  <ArrowRightIcon className="ml-auto h-7 w-7 text-gray-50" />
                </Button>
              </form>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

