import { getTranslations } from "next-intl/server";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getTranslationsWithFallback(locale?: string) {
  const resolvedLocale = locale || 'en';
  return await getTranslations({ locale: resolvedLocale });
}