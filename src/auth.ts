import NextAuth from 'next-auth';
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id"
import type { Provider } from "next-auth/providers"
import { NextRequest, NextResponse } from 'next/server';

// async function getUser(email: string): Promise<User | undefined> {
//   try {
//     const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
//     return user.rows[0];
//   } catch (error) {
//     console.error('Failed to fetch user:', error);
//     throw new Error('Failed to fetch user.');
//   }
// }

const providers: Provider[] = [
  MicrosoftEntraID({
    clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
    clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
    issuer: process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER,
  }),
]

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider()
      return { id: providerData.id, name: providerData.name }
    } else {
      return { id: provider.id, name: provider.name }
    }
  })
  .filter((provider) => provider.id !== "credentials")

const locales = ["en-US", "pt-BR", "es-ES"];

// Get the preferred locale, similar to the above or using a library
function getLocale(headers: Headers) {
  // const headers = new Headers(request.headers);
  const defaultLocale = "en-US";
  const preferredLocale = headers.get("Accept-Language");
  if (preferredLocale) {
    const preferredLocales = preferredLocale.replace(";", ",").split(",");
    for (const lang of preferredLocales) {
      if (lang.startsWith("q=")) continue;
      else if (locales.includes(lang)) {
        return lang;
      }
    }
  }
  return defaultLocale;
}

const publicRoutes = [
  { path: '/', whenAuthenticated: 'next' },
  { path: '/about', whenAuthenticated: 'next' },
  { path: '/about-fsae', whenAuthenticated: 'next' },
  { path: '/our-team', whenAuthenticated: 'next' },
  { path: '/sponsors', whenAuthenticated: 'next' },
  { path: '/cars', whenAuthenticated: 'next' },
  { path: '/contact', whenAuthenticated: 'next' },
  { path: '/gallery', whenAuthenticated: 'next' },
  { path: '/en-US', whenAuthenticated: 'next' },
  { path: '/pt-BR', whenAuthenticated: 'next' },
  { path: '/es-ES', whenAuthenticated: 'next' },
  { path: '/login', whenAuthenticated: 'redirect' },
] as const

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/login'


export const { handlers, auth, signIn, signOut } = NextAuth({
  callbacks: {
    authorized({ auth, request: { nextUrl, headers } }) {

      const isLoggedIn = !!auth?.user;
      const path = nextUrl.pathname
      const publicRoute = publicRoutes.find(route => route.path === path)
      // const pathHasLocale = locales.some(
      //   (locale) => path.startsWith(`/${locale}/`) || path === `/${locale}`,
      // );
      // console.log(path);

      // if (!pathHasLocale && publicRoute) {
      //   const locale = getLocale(headers);
      //   nextUrl.pathname = `/${locale}${path}`;
      // return NextResponse.redirect(nextUrl);
      // }

      // if (pathHasLocale) return;
      
      if (!isLoggedIn && publicRoute) {
        return NextResponse.next()
      }

      if (!isLoggedIn && !publicRoute) {
        const redirectUrl = nextUrl.clone()
        redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE
        return NextResponse.redirect(redirectUrl)
      }

      if (isLoggedIn && publicRoute && publicRoute.whenAuthenticated === 'redirect') {
        const redirectUrl = nextUrl.clone()
        redirectUrl.pathname = '/dashboard'
        return NextResponse.redirect(redirectUrl)
      }

      if (isLoggedIn && !publicRoute) {
        return NextResponse.next()
      }

      
    },
  },

  providers,
  pages: {
    signIn: "/login",
  },
})