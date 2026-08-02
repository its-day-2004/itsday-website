import type { MetadataRoute } from "next";
import { getAllRecruitments, getAllReports } from "@/lib/microcms";
import { siteConfig } from "@/lib/seo";

const staticRoutes = [
  "",
  "/about",
  "/activities",
  "/achievements",
  "/join",
  "/recruitments",
  "/faq",
  "/reports",
  "/contact",
  "/privacy"
];

function parseLastModified(date: string) {
  const parsed = new Date(date.replaceAll(".", "-"));
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [reports, recruitments] = await Promise.all([getAllReports(), getAllRecruitments()]);

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7
    })),
    ...reports.map((report) => ({
      url: `${siteConfig.url}/reports/${report.slug}`,
      lastModified: parseLastModified(report.date),
      changeFrequency: "monthly" as const,
      priority: 0.6
    })),
    ...recruitments.map((item) => ({
      url: `${siteConfig.url}/recruitments/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6
    }))
  ];
}
