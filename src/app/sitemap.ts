// src/app/sitemap.ts
import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const softwareDomain = process.env.NEXT_PUBLIC_SOFTWARE_DOMAIN;
  const photographyDomain = process.env.NEXT_PUBLIC_PHOTOGRAPHY_DOMAIN;
  const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN;

  /*
  const routes = [
    { url: `https://${rootDomain}`, priority: 1.0 },
    { url: `https://${softwareDomain}`, priority: 0.9 },
    { url: `https://${photographyDomain}`, priority: 0.9 },
    { url: `https://${rootDomain}/imprint`, priority: 0.5 },
    { url: `https://${rootDomain}/privacy_policy`, priority: 0.5 },
  ];
  */

  const routes: MetadataRoute.Sitemap = [];

  // 1. Root Domain (Landing Page) - for each locale
  routing.locales.forEach((locale) => {
    // Handle default locale prefix logic if needed (e.g. 'en' might be at root '/')
    // But sitemap usually prefers explicit paths.
    // For simplicity with next-intl, we can map:
    // en -> /
    // de -> /de
    const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;

    routes.push({
      url: `https://${rootDomain}${prefix}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    });

    routes.push({
      url: `https://${rootDomain}${prefix}/imprint`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    });

    routes.push({
      url: `https://${rootDomain}${prefix}/privacy_policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    });
  });

  // 2. External projects (Software/Photography) - these seem to be separate domains
  // If they are separate Next.js apps, they should have their own sitemaps.
  // If we still want to link them here for some reason:
  routes.push({
    url: `https://${softwareDomain}`,
    lastModified: new Date(),
    priority: 0.9,
  });
  routes.push({
    url: `https://${photographyDomain}`,
    lastModified: new Date(),
    priority: 0.9,
  });

  return routes;
}
