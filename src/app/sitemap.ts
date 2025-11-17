// src/app/sitemap.ts
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const softwareDomain = process.env.NEXT_PUBLIC_SOFTWARE_DOMAIN;
  const photographyDomain = process.env.NEXT_PUBLIC_PHOTOGRAPHY_DOMAIN;
  const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN;

  const routes = [
    { url: `https://${rootDomain}`, priority: 1.0 },
    { url: `https://${softwareDomain}`, priority: 0.9 },
    { url: `https://${photographyDomain}`, priority: 0.9 },
    { url: `https://${rootDomain}/imprint`, priority: 0.5 },
    { url: `https://${rootDomain}/privacy_policy`, priority: 0.5 },
  ];

  return routes;
}
