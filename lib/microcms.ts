import { activityReports } from "./site-data";
import type { ActivityReport, Recruitment } from "./site-data";

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;
const placeholderImage = "/placeholder-image.jpg";

type MicroCMSImage = {
  url: string;
  width?: number;
  height?: number;
};

type MicroCMSReport = {
  id: string;
  title?: string;
  slug?: string;
  category?: string;
  gallery?: MicroCMSImage[];
  thumbnail?: MicroCMSImage;
  excerpt?: string;
  content?: string;
  publishedAt?: string;
};

type MicroCMSRecruitment = {
  id: string;
  title?: string;
  slug?: string;
  thumbnail?: MicroCMSImage;
  excerpt?: string;
  content?: string;
  applicationUrl?: string;
  isOpen?: boolean;
  publishedAt?: string;
};

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

function formatPublishedDate(publishedAt?: string) {
  if (!publishedAt) {
    return "";
  }

  const date = new Date(publishedAt);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  })
    .format(date)
    .replaceAll("/", ".");
}

function sanitizeMicroCMSHtml(html?: string) {
  if (!html) {
    return "";
  }

  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, "")
    .replace(/<iframe[\s\S]*?>[\s\S]*?<\/iframe>/gi, "")
    .replace(/<\/?(object|embed|form|input|button|textarea|select|option|meta|link)[^>]*?>/gi, "")
    .replace(/\son\w+="[^"]*"/gi, "")
    .replace(/\son\w+='[^']*'/gi, "")
    .replace(/\s(href|src)=["']javascript:[^"']*["']/gi, "");
}

function encodeFilters(filter: string) {
  return encodeURIComponent(filter);
}

async function fetchListFromMicroCMS<T>(endpoint: string): Promise<FetchResult<T>> {
  if (!serviceDomain || !apiKey) {
    return { ok: false, contents: [] };
  }

  try {
    const response = await fetch(`https://${serviceDomain}.microcms.io/api/v1/${endpoint}`, {
      cache: "no-store",
      headers: {
        "X-MICROCMS-API-KEY": apiKey
      }
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

function normalizeReportFromCMS(item: MicroCMSReport): ActivityReport {
  return {
    id: item.id,
    slug: item.slug ?? "",
    title: item.title ?? "",
    date: formatPublishedDate(item.publishedAt),
    category: item.category ?? "",
    excerpt: item.excerpt ?? "",
    image: item.thumbnail?.url ?? placeholderImage,
    contentHtml: sanitizeMicroCMSHtml(item.content),
    gallery: Array.isArray(item.gallery)
      ? item.gallery
          .filter((image): image is MicroCMSImage => Boolean(image?.url))
          .map((image) => ({
            url: image.url,
            width: image.width,
            height: image.height
          }))
      : []
  };
}

function normalizeRecruitmentFromCMS(item: MicroCMSRecruitment): Recruitment {
  return {
    id: item.id,
    slug: item.slug ?? "",
    title: item.title ?? "",
    image: item.thumbnail?.url ?? placeholderImage,
    excerpt: item.excerpt ?? "",
    contentHtml: sanitizeMicroCMSHtml(item.content),
    applicationUrl: item.applicationUrl ?? "",
    isOpen: Boolean(item.isOpen),
    publishedAt: formatPublishedDate(item.publishedAt)
  };
}

export async function getLatestReports() {
  const result = await fetchListFromMicroCMS<MicroCMSReport>("reports?limit=3&orders=-publishedAt");

  if (!result.ok) {
    return [];
  }

  if (result.contents.length === 0) {
    return activityReports.slice(0, 3);
  }

  return result.contents.map(normalizeReportFromCMS).filter((report) => report.slug && report.title);
}

export async function getAllReports() {
  const result = await fetchListFromMicroCMS<MicroCMSReport>("reports?limit=100&orders=-publishedAt");

  if (!result.ok) {
    return [];
  }

  if (result.contents.length === 0) {
    return activityReports;
  }

  return result.contents.map(normalizeReportFromCMS).filter((report) => report.slug && report.title);
}

export async function getReportBySlug(slug: string) {
  const result = await getReportBySlugResult(slug);
  return result.status === "ready" ? result.item : null;
}

export async function getReportBySlugResult(slug: string): Promise<DetailResult<ActivityReport>> {
  const filters = encodeFilters(`slug[equals]${slug}`);
  const result = await fetchListFromMicroCMS<MicroCMSReport>(`reports?filters=${filters}&limit=1`);

  if (!result.ok) {
    return { status: "preparing", item: null };
  }

  if (result.contents.length === 0) {
    return { status: "missing", item: null };
  }

  const report = normalizeReportFromCMS(result.contents[0]);
  return report.slug && report.title ? { status: "ready", item: report } : { status: "missing", item: null };
}

export async function getCurrentRecruitments() {
  const result = await fetchListFromMicroCMS<MicroCMSRecruitment>("recruitments?limit=2&orders=-publishedAt");

  if (!result.ok) {
    return [];
  }

  if (result.contents.length === 0) {
    return [];
  }

  return result.contents.map(normalizeRecruitmentFromCMS).filter((item) => item.slug && item.title);
}

export async function getAllRecruitments() {
  const result = await fetchListFromMicroCMS<MicroCMSRecruitment>("recruitments?limit=100&orders=-publishedAt");

  if (!result.ok) {
    return [];
  }

  if (result.contents.length === 0) {
    return [];
  }

  return result.contents.map(normalizeRecruitmentFromCMS).filter((item) => item.slug && item.title);
}

export async function getRecruitmentBySlug(slug: string) {
  const result = await getRecruitmentBySlugResult(slug);
  return result.status === "ready" ? result.item : null;
}

export async function getRecruitmentBySlugResult(slug: string): Promise<DetailResult<Recruitment>> {
  const filters = encodeFilters(`slug[equals]${slug}`);
  const result = await fetchListFromMicroCMS<MicroCMSRecruitment>(`recruitments?filters=${filters}&limit=1`);

  if (!result.ok) {
    return { status: "preparing", item: null };
  }

  if (result.contents.length === 0) {
    return { status: "missing", item: null };
  }

  const item = normalizeRecruitmentFromCMS(result.contents[0]);
  return item.slug && item.title ? { status: "ready", item } : { status: "missing", item: null };
}
