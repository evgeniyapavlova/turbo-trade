import type { LocaleType, LocaleFullType } from '$lib/types/locales';

// export const locales: LocaleType[] = ['ar', 'en', 'es', 'pt', 'ru', 'th'];
export const locales: LocaleType[] = ['en', 'ru', 'es'];

export const LOCALES_MAP: LocaleFullType[] = [
	{ name: 'ar_KW', title: 'العربية', shortname: 'ar' },
	{ name: 'en_US', title: 'English', shortname: 'en' },
	{ name: 'es_ES', title: 'Español', shortname: 'es' },
	{ name: 'pt_PT', title: 'Português', shortname: 'pt' },
	{ name: 'ru_RU', title: 'Русский', shortname: 'ru' },
	{ name: 'th_TH', title: 'ไทย', shortname: 'th' }
];
