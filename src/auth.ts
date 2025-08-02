import NextAuth from "next-auth";
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";
import type { Provider } from "next-auth/providers";
import { NextRequest, NextResponse } from "next/server";
import { locales, getPathnameLocale, getHeaderLocale } from "@/locale";


// async function getUser(email: string): Promise<User | undefined> {
//   try {
//     const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
//     return user.rows[0];
//   } catch (error) {
//     console.error('Failed to fetch user:', error);
//     throw new Error('Failed to fetch user.');
//   }
// }

export type Member = {
  ra : String,
  roles : String[]
  is_active : boolean
}

export async function isMember(ra: string) : Promise<boolean>{
  try{
    const fetch_data = await fetch(`${process.env.API_URL}/member/${ra}`, {
    method: "GET"
    });
    const data : Member | null | undefined = await fetch_data.json();
    if(!data) return false;
    console.log(data.is_active)
    return data.is_active;
  }
  catch(e){
    console.log(e);
    return false;
  }
}

const providers: Provider[] = [
  MicrosoftEntraID({
    clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
    clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
    issuer: process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER,
  }),
];

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider();
      return { id: providerData.id, name: providerData.name };
    } else {
      return { id: provider.id, name: provider.name };
    }
  })
  .filter((provider) => provider.id !== "credentials");

export const { handlers, auth, signIn, signOut } = NextAuth({
  callbacks: {
    async authorized({ auth, request: { nextUrl, headers } }) {
     
      var locale = ""
      const { pathname } = nextUrl;

      const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
      );
      if (pathnameHasLocale) {
        console.log(`auth.ts pathnameHasLocale: ${pathnameHasLocale}`);
        locale = getPathnameLocale(pathname)
      } else {
        locale = getHeaderLocale(headers);
      }

      const isLoggedIn = !!auth?.user;

      const isOnDashboard = nextUrl.pathname.startsWith(`/${locale}/dashboard`);

      if (isOnDashboard) {
        if (isLoggedIn) {
          return true; // Enter in Dashboard
        } else {
          return false; // Redirect unauthenticated users to login page // ok
        }
      } else if (isLoggedIn) {
        return true;
      }
      return true;
    },
  },

  providers,
  pages: {
    signIn: `/login`,
    signOut: `/login`
  },
});
