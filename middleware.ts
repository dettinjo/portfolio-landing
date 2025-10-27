import { NextRequest, NextResponse } from "next/server";
import { routing, isValidLocale } from "./src/i18n/routing";

function getLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && isValidLocale(cookieLocale)) {
    return cookieLocale;
  }

  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const primaryLanguage = acceptLanguage.split(",")[0].split("-")[0];
    if (isValidLocale(primaryLanguage)) {
      return primaryLanguage;
    }
  }

  return routing.defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next") || /\..*$/.test(pathname)) {
    return NextResponse.next();
  }

  const locale = getLocale(request);

  // Rewrite to the internal, localized path (e.g., / -> /en, /imprint -> /en/imprint)
  const finalPath = `/${locale}${pathname}`;
  return NextResponse.rewrite(new URL(finalPath, request.url));
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
