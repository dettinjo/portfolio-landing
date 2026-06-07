import { getRequestConfig } from "next-intl/server";
import { isValidLocale, routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !isValidLocale(locale)) {
    return {
      locale: routing.defaultLocale,
      messages: {
        ...(await import(`../../messages/${routing.defaultLocale}/common.json`)).default,
      },
    };
  }

  return {
    locale,
    messages: {
      ...(await import(`../../messages/${locale}/common.json`)).default,
    },
  };
});
