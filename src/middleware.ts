// export { auth as middleware } from "@/auth"
import { NextRequest, NextResponse } from 'next/server';
// import { NextResponse, NextRequest } from "next/server";
// import { auth } from "./auth";

// export default auth;

const locales = ["en-US", "pt-BR", "es-ES"];

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  const headers = new Headers(request.headers);
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

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // if (pathname.startsWith("/login")) {
    if (pathname.startsWith("/login") || pathname.startsWith("/dashboard")) {
      return;
  }
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );
  console.log(pathname);
  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|_next/static|_next/image|images|public|favicon.ico).*)",
  ],
};
