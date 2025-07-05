import { derived, readable } from 'svelte/store';

export const DEVICES_MAP = {
	mac: 'mac',
	windows: 'windows',
	android: 'android',
	ios: 'ios'
} as const;

export type DeviceType = keyof typeof DEVICES_MAP;
export type DeviceValue = (typeof DEVICES_MAP)[DeviceType];

export const device = readable<DeviceValue | ''>('', (set) => {
	const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '';

	const isAndroid = /android/i.test(userAgent);
	const isIos = /ip[honead]{2,4}/i.test(userAgent);
	const isDesktop = !isAndroid && !isIos;

	if (isDesktop) {
		set(userAgent.includes('Windows') ? DEVICES_MAP.windows : DEVICES_MAP.mac);
	} else {
		set(isIos ? DEVICES_MAP.ios : DEVICES_MAP.android);
	}

	return () => {};
});

export const isDesktop = derived<typeof device, boolean>(
	device,
	($device) => $device === DEVICES_MAP.windows || $device === DEVICES_MAP.mac
);
