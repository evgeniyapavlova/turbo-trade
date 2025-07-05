import { locales } from '$lib/translations/utils/locales';
import { type LocaleType } from '$lib/types/locales';

function isLocale(lang: string): lang is LocaleType {
	return locales.includes(lang as LocaleType);
}

export const load = async ({ params }) => {
	const lang = isLocale(params.lang) ? params.lang : 'en';

	const translations = await import(`$lib/translations/json/${lang}.json`).then((m) => m.default);

	return { lang, translations };
};
