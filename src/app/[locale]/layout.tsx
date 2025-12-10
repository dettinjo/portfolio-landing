// src/app/[locale]/layout.tsx
import "../globals.css";
// import "devicon/devicon.min.css"; // Removed unused css
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/Theme-Provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { isValidLocale, routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import React from "react";

// NEW: Enable SSG by statically generating params for all locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const inter = Inter({ subsets: ["latin"] });

// This metadata function receives resolved params, so its signature is correct.
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "HomePageSEO" });
  const fullName = process.env.NEXT_PUBLIC_FULL_NAME || "Portfolio";
  const firstName = fullName.split(" ")[0];

  const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || "";
  return {
    title: t("title", { name: firstName }),
    description: t("description", { name: firstName }),
    alternates: {
      canonical: `https://${rootDomain}`,
      languages: {
        en: `https://${rootDomain}`,
        de: `https://${rootDomain}/de`,
        "x-default": `https://${rootDomain}`,
      },
    },
  };
}

// FIX 2: The layout component's props are reverted to their original structure,
// accepting 'params' as a Promise.
export default async function RootLocaleLayout({
  children,
  params, // Kept as a Promise
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // This is the correct type
}>) {
  // Await the promise to get the locale
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
