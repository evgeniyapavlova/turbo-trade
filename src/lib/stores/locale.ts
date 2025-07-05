import { writable } from 'svelte/store';
import { type LocaleType } from '$lib/types/locales';

export const locale = writable<LocaleType>('en');
