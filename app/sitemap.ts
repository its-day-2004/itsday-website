import type { MetadataRoute } from "next";
import { getAllRecruitments, getAllReports } from "@/lib/microcms";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [reports, recruitments] = await Promise.all([getAllReports(), getAllRecruitments()]);

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7
    })),
    ...reports.map((report) => ({
      url: `${siteUrl}/reports/${report.slug}`,
      lastModified: new Date(report.date.replaceAll(".", "-")),
      changeFrequency: "monthly" as const,
      priority: 0.6
    })),
    ...recruitments.map((item) => ({
      url: `${siteUrl}/recruitments/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6
    }))
  ];
}
