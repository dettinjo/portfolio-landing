// src/i18n/routing.ts
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "de"] as const,
  defaultLocale: "en",

  // THIS IS THE FIX:
  // Change 'never' to 'as-needed' or 'always'.
  // 'as-needed' will omit the prefix for your default locale ('en').
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];

export function isValidLocale(value: string): value is Locale {
  return (routing.locales as readonly string[]).includes(value);
}
