import { writable, derived } from 'svelte/store';
import { type LocaleType } from '$lib/types/locales';

import { LOCALES_MAP } from '$lib/translations/utils/locales';

export const locale = writable<LocaleType>('en');

export const localeFull = derived(locale, ($locale) =>
	LOCALES_MAP?.find(({ shortname }) => shortname === $locale)?.name.replace('_', '-')
);
