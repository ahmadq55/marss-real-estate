import type { MetadataRoute } from "next";

const BASE_URL = "https://marssrealestate.com";

const ACQUISITION_TYPES = [
  "gas-stations",
  "car-washes",
  "multifamily",
  "self-storage",
  "auto-dealerships",
  "motels",
  "laundromats",
  "light-manufacturing",
];

const RESOURCE_PAGES = [
  "ai-tools-2026",
  "analyze-business-acquisition",
  "analyze-commercial-deal",
  "equity-carry-guide",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const acquisitionRoutes: MetadataRoute.Sitemap = ACQUISITION_TYPES.map((type) => ({
    url: `${BASE_URL}/acquisitions/${type}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const resourceRoutes: MetadataRoute.Sitemap = RESOURCE_PAGES.map((slug) => ({
    url: `${BASE_URL}/resources/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...acquisitionRoutes, ...resourceRoutes];
}
