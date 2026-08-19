import { defaultLang, locale, type SupportedLanguages } from "./locale";

// Pure function: derives lang from the URL, no side effects.
export function getLangFromUrl(url: URL): SupportedLanguages {
  const [, language] = url.pathname.split("/");
  if (language && language in locale) {
    return language as SupportedLanguages;
  }
  return defaultLang;
}

export function useTranslations(lang: SupportedLanguages) {
  const localizedUI: Record<string, string> = locale[lang];
  return function t(key: keyof (typeof locale)[typeof defaultLang]) {
    return key in localizedUI ? localizedUI[key] : locale[defaultLang][key];
  };
}

export function buildLocalePath(lang: SupportedLanguages, path: string) {
  return lang === "en" ? `/en/${path}` : path;
}
