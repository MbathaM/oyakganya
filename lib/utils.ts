import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge arbitrary class name inputs into a single deduplicated string.
 *
 * Combines the ergonomics of `clsx` (conditional/array/object inputs)
 * with `tailwind-merge` to resolve conflicting Tailwind utility classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Derive up to two initials from a full name.
 */
export const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");
};

/**
 * Format a Date into a readable full string with an ordinal day suffix.
 *
 * Example: "Monday, January 1st 2025"
 */
export function formatDate(date: Date) {
  const d = new Date(date);

  const day = d.getDate();
  const weekday = d.toLocaleDateString("en-US", { weekday: "long" });
  const month = d.toLocaleDateString("en-US", { month: "long" });
  const year = d.getFullYear();

  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";

  return `${weekday}, ${month} ${day}${suffix} ${year}`;
}

/**
 * Custom error for not-found resources.
 * You can extend this for other domain-specific errors if needed.
 */
export class ResourceNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ResourceNotFoundError";
  }
}

/**
 * Fetch JSON with Next.js cache hints and typed response.
 *
 * Adds `next: { revalidate: timeout }` and supports Next.js tag-based revalidation.
 *
 * @template T - Expected JSON response shape.
 * @param {string} url - Target endpoint.
 * @param {RequestInit & { revalidate?: number; tags?: string[] }} [options]
 * @returns {Promise<T>} Parsed JSON response.
 */
export async function NextFetch<T>(
  url: string,
  options?: RequestInit & { revalidate?: number; tags?: string[] }
): Promise<T> {
  const { revalidate = 60, tags, ...rest } = options || {};

  const res = await fetch(url, {
    ...rest,
    next: { revalidate, tags },
    headers: {
      "Content-Type": "application/json",
      ...(rest.headers || {}),
    },
    credentials: "include", // send cookies with each request
  });

  if (!res.ok) {
    if (res.status === 404) throw new ResourceNotFoundError(`Resource not found at ${url}`);
    throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
  }

  return (await res.json()) as T;
}
