/**
 * ============================================================================
 *  LANGUAGE
 *  This build is single-language: the whole Davao site is served in English at "/".
 *  All copy lives in content/site.ts.
 * ============================================================================
 */
import * as site from "./site";

export const SITE_LANG = "en" as const;
export const locales = [{ code: "en", label: "English", short: "EN" }] as const;
export type Lang = (typeof locales)[number]["code"];
/** Single-language site: every language link points home. */
export const langHref = (_lang: Lang) => "/";

/** Registration form, shown inline in the #register section (monday.com allows framing only via /forms/embed/). */
const registerForm = site.forms.davao;
const registerEmbed = registerForm.replace("/forms/", "/forms/embed/");

const { tel, ...english } = site;
export type Content = typeof english;

export function getContent(_lang: Lang = SITE_LANG): Content {
  const c = english;
  return {
    ...c,
    hero: { ...c.hero, primaryCta: { ...c.hero.primaryCta, href: "#register" } },
    finalCta: { ...c.finalCta, form: { ...c.finalCta.form, embed: registerEmbed, url: registerForm } },
  };
}

export { tel };
