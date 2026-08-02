import { activityReports, recruitments } from "./site-data";
import type { ActivityReport, Recruitment } from "./site-data";

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

type MicroCMSListResponse<T> = {
  contents: T[];
};

type FetchResult<T> =
  | { ok: true; contents: T[] }
  | { ok: false; contents: [] };

type DetailResult<T> =
  | { status: "ready"; item: T }
  | { status: "preparing"; item: null }
  | { status: "missing"; item: null };

function normalizeImage(image: unknown, fallback: string) {
  if (typeof image === "string" && image.length > 0) {
    return image;
  }

  if (image && typeof image === "object" && "url" in image && typeof image.url === "string") {
    return image.url;
  }

  return fallback;
}

function normalizeBody(body: unknown, fallback: string[]) {
  if (Array.isArray(body)) {
    return body.map((item) => String(item)).filter(Boolean);
  }

  if (typeof body === "string" && body.length > 0) {
    return [body];
  }

  return fallback;
}

function normalizeReport(item: Partial<ActivityReport>, fallback: ActivityReport): ActivityReport {
  return {
    id: item.id ?? fallback.id,
    slug: item.slug ?? fallback.slug,
    title: item.title ?? fallback.title,
    date: item.date ?? fallback.date,
    category: item.category ?? fallback.category,
    excerpt: item.excerpt ?? fallback.excerpt,
    image: normalizeImage(item.image, fallback.image),
    body: normalizeBody(item.body, fallback.body)
  };
}

function normalizeRecruitment(item: Partial<Recruitment>, fallback: Recruitment): Recruitment {
  return {
    id: item.id ?? fallback.id,
    slug: item.slug ?? fallback.slug,
    title: item.title ?? fallback.title,
    status: item.status ?? fallback.status,
    period: item.period ?? fallback.period,
    deadline: item.deadline ?? fallback.deadline,
    fee: item.fee ?? fallback.fee,
    travelCost: item.travelCost ?? fallback.travelCost,
    accommodationCost: item.accommodationCost ?? fallback.accommodationCost,
    discount: item.discount ?? fallback.discount,
    capacity: item.capacity ?? fallback.capacity,
    formUrl: item.formUrl ?? fallback.formUrl,
    note: item.note ?? fallback.note
  };
}

async function fetchListFromMicroCMS<T>(endpoint: string): Promise<FetchResult<T>> {
  if (!serviceDomain || !apiKey) {
    return { ok: false, contents: [] };
  }

  try {
    const response = await fetch(`https://${serviceDomain}.microcms.io/api/v1/${endpoint}`, {
      headers: {
        "X-MICROCMS-API-KEY": apiKey
      },
      next: { revalidate: 300 }
    });

    if (!response.ok) {
      return { ok: false, contents: [] };
    }

    const data = (await response.json()) as MicroCMSListResponse<T>;

    if (!Array.isArray(data.contents)) {
      return { ok: false, contents: [] };
    }

    return { ok: true, contents: data.contents };
  } catch {
    return { ok: false, contents: [] };
  }
}

export async function getLatestReports() {
  const result = await fetchListFromMicroCMS<Partial<ActivityReport>>("reports?limit=3");

  if (!result.ok) {
    return [];
  }

  if (result.contents.length === 0) {
    return activityReports.slice(0, 3);
  }

  return result.contents.map((item, index) => normalizeReport(item, activityReports[index] ?? activityReports[0]));
}

export async function getAllReports() {
  const result = await fetchListFromMicroCMS<Partial<ActivityReport>>("reports?limit=100");

  if (!result.ok) {
    return [];
  }

  if (result.contents.length === 0) {
    return activityReports;
  }

  return result.contents.map((item, index) => normalizeReport(item, activityReports[index] ?? activityReports[0]));
}

export async function getReportBySlug(slug: string) {
  const result = await getReportBySlugResult(slug);
  return result.status === "ready" ? result.item : null;
}

export async function getReportBySlugResult(slug: string): Promise<DetailResult<ActivityReport>> {
  const result = await fetchListFromMicroCMS<Partial<ActivityReport>>("reports?limit=100");

  if (!result.ok) {
    return { status: "preparing", item: null };
  }

  const reports =
    result.contents.length === 0
      ? activityReports
      : result.contents.map((item, index) => normalizeReport(item, activityReports[index] ?? activityReports[0]));
  const report = reports.find((item) => item.slug === slug || item.id === slug);

  return report ? { status: "ready", item: report } : { status: "missing", item: null };
}

export async function getCurrentRecruitments() {
  const result = await fetchListFromMicroCMS<Partial<Recruitment>>("recruitments?limit=2");

  if (!result.ok) {
    return [];
  }

  if (result.contents.length === 0) {
    return recruitments.slice(0, 2);
  }

  return result.contents.map((item, index) => normalizeRecruitment(item, recruitments[index] ?? recruitments[0]));
}

export async function getAllRecruitments() {
  const result = await fetchListFromMicroCMS<Partial<Recruitment>>("recruitments?limit=100");

  if (!result.ok) {
    return [];
  }

  if (result.contents.length === 0) {
    return recruitments;
  }

  return result.contents.map((item, index) => normalizeRecruitment(item, recruitments[index] ?? recruitments[0]));
}

export async function getRecruitmentBySlug(slug: string) {
  const result = await getRecruitmentBySlugResult(slug);
  return result.status === "ready" ? result.item : null;
}

export async function getRecruitmentBySlugResult(slug: string): Promise<DetailResult<Recruitment>> {
  const result = await fetchListFromMicroCMS<Partial<Recruitment>>("recruitments?limit=100");

  if (!result.ok) {
    return { status: "preparing", item: null };
  }

  const recruitmentsData =
    result.contents.length === 0
      ? recruitments
      : result.contents.map((item, index) => normalizeRecruitment(item, recruitments[index] ?? recruitments[0]));
  const item = recruitmentsData.find((recruitment) => recruitment.slug === slug || recruitment.id === slug);

  return item ? { status: "ready", item } : { status: "missing", item: null };
}
