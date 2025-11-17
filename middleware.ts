// middleware.ts
import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

export default createMiddleware({
  // Use the routing configuration
  ...routing,

  // A list of all locales that are supported
  locales: routing.locales,

  // Used when no locale matches
  defaultLocale: routing.defaultLocale,
});

export const config = {
  // Match only internationalized routes
  matcher: [
    "/",
    "/(de|en)/:path*",
    // Skip internal paths and assets
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
