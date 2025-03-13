import { redirect } from "next/navigation";
import { signIn, auth, providerMap } from "@/auth";
import { AuthError } from "next-auth";
import {
  ArrowRightIcon,
  AtSymbolIcon,
  ExclamationCircleIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/button1";
import FsaeLiveLogo from "@/ui/fsaelive-logo";
import { SignIn } from "@/app/ui/auth/signin-button";
// import { useActionState } from "react";

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl: string | undefined }>;
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
          <SignIn />
        </div>
      </div>
    </main>
  );
}

