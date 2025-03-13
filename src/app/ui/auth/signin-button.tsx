import { providerMap, signIn, signOut } from "@/auth";
import { Button } from "@/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  const SIGNIN_ERROR_URL = "/";

  return (
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
                // redirectTo: sP?.callbackUrl ?? "",
                redirectTo: "/dashboard",
              });
            } catch (error) {
              // Signin can fail for a number of reasons, such as the user
              // not existing, or the user not having the correct role.
              // In some cases, you may want to redirect to a custom error
              if (error instanceof AuthError) {
                return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`);
              }

              // Otherwise if a redirects happens Next.js can handle it
              // so you can just re-thrown the error and let Next.js handle it.
              // Docs:
              // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
              throw error;
            }
          }}
        >
          <Button className="mt-4 w-full h-14">
            <p className="text-lg">Sign-in with {provider.name}</p>
            <ArrowRightIcon className="ml-auto h-7 w-7 text-gray-50" />
          </Button>
        </form>
      ))}
    </div>
  );
}
