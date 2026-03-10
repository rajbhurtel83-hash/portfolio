import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type SanitizeUrlOptions = {
  allowRelative?: boolean;
  allowHash?: boolean;
  fallback?: string;
};

const SAFE_PROTOCOLS = new Set(["http:", "https:", "mailto:", "tel:"]);

export function sanitizeUrl(
  value: string | null | undefined,
  options: SanitizeUrlOptions = {}
): string {
  const {
    allowRelative = true,
    allowHash = true,
    fallback = "#",
  } = options;

  if (!value) return fallback;

  const url = value.trim();
  if (!url) return fallback;

  // Reject control characters that can be used for parser confusion.
  if (/[\u0000-\u001F\u007F]/.test(url)) return fallback;

  if (allowHash && url.startsWith("#")) {
    return url;
  }

  // Allow safe relative paths, but block protocol-relative URLs (//example.com).
  if (allowRelative && (/^\/(?!\/)/.test(url) || url.startsWith("./") || url.startsWith("../"))) {
    return url;
  }

  try {
    const parsed = new URL(url);
    if (SAFE_PROTOCOLS.has(parsed.protocol.toLowerCase())) {
      return url;
    }
  } catch {
    return fallback;
  }

  return fallback;
}
