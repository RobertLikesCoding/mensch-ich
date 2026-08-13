import { locale } from "../i18n/locale";
import { test, expect } from "vitest";

test("locale keys match across languages", () => {
  const localeKeys = Object.values(locale).map((locale) =>
    Object.keys(locale).toSorted(),
  );

  const baselineKeys = localeKeys[0];

  localeKeys.slice(1).forEach((keys) => {
    expect(keys).toEqual(baselineKeys);
  });
});
