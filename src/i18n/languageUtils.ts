import { locale } from "./locale";

export type SupportedLanguages = keyof typeof locale;
const defaultLang: SupportedLanguages = "de";

// Pure function: derives lang from the URL, no side effects.
export function getLangFromUrl(url: URL): SupportedLanguages {
  const [, language] = url.pathname.split("/");
  if (language && language in locale) {
    return language as SupportedLanguages;
  }
  return defaultLang;
}

// Takes lang explicitly instead of closing over a shared ref.
export function useTranslations(lang: SupportedLanguages) {
  return function t(key: keyof (typeof locale)[typeof lang]) {
    return locale[lang][key];
  };
}

export function buildLocalePath(lang: SupportedLanguages, path: string) {
  return lang === "en" ? `/en/${path}` : path;
}
