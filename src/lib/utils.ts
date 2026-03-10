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

const PROMPT_INJECTION_PATTERNS: RegExp[] = [
  /ignore\s+(all\s+)?(previous|prior|earlier)\s+instructions?/i,
  /(reveal|show|print|dump).*(system|developer|hidden)\s+prompt/i,
  /\b(jailbreak|bypass|override)\b.*\b(instruction|guard|safety)\b/i,
  /\b(roleplay as|act as)\b.*\b(system|developer|root|admin)\b/i,
  /do\s+not\s+follow\s+.*\s+instructions?/i,
];

const MALICIOUS_CONTENT_REPLACERS: RegExp[] = [
  /<script\b[\s\S]*?<\/script>/gi,
  /<\/?(iframe|object|embed|style|meta|link)\b[^>]*>/gi,
  /\bon\w+\s*=\s*(["']).*?\1/gi,
  /javascript\s*:/gi,
  /data\s*:\s*text\/html/gi,
];

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

export function containsPromptInjectionAttempt(value: string): boolean {
  if (!value) return false;
  return PROMPT_INJECTION_PATTERNS.some((pattern) => pattern.test(value));
}

export function sanitizeWebContent(value: string | null | undefined): string {
  if (!value) return "";

  let cleaned = value;

  for (const pattern of MALICIOUS_CONTENT_REPLACERS) {
    cleaned = cleaned.replace(pattern, "");
  }

  cleaned = cleaned
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n");

  const safeLines = cleaned
    .split(/\r?\n/)
    .filter((line) => !containsPromptInjectionAttempt(line))
    .map((line) => line.trimEnd());

  return safeLines.join("\n").trim();
}
