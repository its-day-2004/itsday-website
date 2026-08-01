import { activityReports, recruitments } from "./site-data";

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;
const showMockContent = process.env.NODE_ENV !== "production" || process.env.SHOW_MOCK_CONTENT === "true";

async function fetchFromMicroCMS<T>(endpoint: string): Promise<T | null> {
  if (!serviceDomain || !apiKey) {
    return null;
  }

  const response = await fetch(`https://${serviceDomain}.microcms.io/api/v1/${endpoint}`, {
    headers: {
      "X-MICROCMS-API-KEY": apiKey
    },
    next: { revalidate: 300 }
  });

  if (!response.ok) {
    return null;
  }

  return response.json() as Promise<T>;
}

export async function getLatestReports() {
  const data = await fetchFromMicroCMS<{ contents: typeof activityReports }>("reports?limit=3");
  return data?.contents ?? (showMockContent ? activityReports : []);
}

export async function getAllReports() {
  const data = await fetchFromMicroCMS<{ contents: typeof activityReports }>("reports");
  return data?.contents ?? (showMockContent ? activityReports : []);
}

export async function getReportBySlug(slug: string) {
  const reports = await getAllReports();
  return reports.find((report) => report.slug === slug || report.id === slug) ?? null;
}

export async function getCurrentRecruitments() {
  const data = await fetchFromMicroCMS<{ contents: typeof recruitments }>("recruitments?limit=2");
  return data?.contents ?? (showMockContent ? recruitments : []);
}

export async function getAllRecruitments() {
  const data = await fetchFromMicroCMS<{ contents: typeof recruitments }>("recruitments");
  return data?.contents ?? (showMockContent ? recruitments : []);
}

export async function getRecruitmentBySlug(slug: string) {
  const recruitmentsData = await getAllRecruitments();
  return recruitmentsData.find((item) => item.slug === slug || item.id === slug) ?? null;
}
