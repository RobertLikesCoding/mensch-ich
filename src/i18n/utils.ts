import { ref } from "vue";
import { locale } from "../i18n/locale";

export type SupportedLanguages = keyof typeof locale;
const defaultLang = "de";
export const lang = ref<SupportedLanguages>(defaultLang);

export function getLangFromUrl(url: URL) {
  const [, language] = url.pathname.split("/");
  if (language && language in locale) {
    lang.value = language as SupportedLanguages;
    return lang.value;
  }
  lang.value = defaultLang;
  return lang.value;
}

export function useTranslations() {
  return function t(key: keyof (typeof locale)[typeof lang.value]) {
    return locale[lang.value][key];
  };
}
