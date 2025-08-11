import { auth, isMember } from "@/auth";
import { getHeaderLocale, getPathnameLocale, locales } from "@/locale";
import { MiddlewareConfig, NextResponse } from "next/server";

export default auth(async ({ auth, nextUrl, headers }) => {
  
  var locale = ""
  const { pathname } = nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );
  if (pathnameHasLocale) {
    locale = getPathnameLocale(pathname)
  } else {
    // Redirect if there is no locale
    locale = getHeaderLocale(headers);
    nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(nextUrl);
  }

  
  // IF NOT AUTH, AND TRY DASHBOARD, ACCESS LOGIN
  if (nextUrl.pathname.startsWith(`/${locale}/dashboard`)) {
    if(!auth)return NextResponse.redirect(new URL(`/${locale}/login`, nextUrl.origin));
    if(!auth.user?.email) return NextResponse.redirect(new URL(`/${locale}/login`, nextUrl.origin));
    let member = await isMember(auth.user.email.split("@")[0]);
    if(!member){
      return NextResponse.redirect(new URL(`/${locale}/login`, nextUrl.origin));
    }
  }

})


export const config: MiddlewareConfig = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|images|public|favicon.ico|assets).*)",
  ],
};
