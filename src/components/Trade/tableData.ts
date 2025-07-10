export const assets = [
	{ name: 'Decentraland', logo: '/storage/public/ch/hm/rc261vdvgrt524g0.svg' },
	{ name: 'TRON', logo: '/storage/public/5c/87/aa23814c87i8d0j7a7.svg' },
	{ name: 'Dogecoin', logo: '/storage/public/61/71/35bcd56df9h8i8c1f0.svg' },
	{ name: 'Ripple', logo: '/storage/public/5b/50/81b96c88e.svg' },
	{ name: 'Cardano', logo: '/storage/public/5c/7f/8a4b31d7b1j7a5e3d7.svg' },
	{ name: 'Ethereum', logo: '/storage/public/5b/50/81e357c97.svg' },
	{ name: 'The Sandbox', logo: '/storage/public/ch/hn/9v6i9sl1adln03fg.svg' },
	{ name: 'Litecoin', logo: '/storage/public/5c/7f/89fa9381e3c5h4e1c5.svg' },
	{ name: 'Chainlink', logo: '/storage/public/61/71/35304542c5j5j9h7d8.svg' },
	{ name: 'BNB', logo: '/storage/public/5c/62/8ad1e0eca.svg' },
	{ name: 'Bitcoin', logo: '/storage/public/5b/50/81f9b71a0.svg' },
	{ name: 'Solana', logo: '/storage/public/ch/hn/8jui9sl1adln03b0.svg' },
	{ name: 'Avalanche', logo: '/storage/public/ch/hm/mg39e7nafc75cte0.svg' },
	{ name: 'Bitcoin Cash', logo: '/storage/public/5b/50/802aeb101.svg' },
	{ name: 'Ethereum Classic', logo: '/storage/public/5b/50/80c73c4bb.svg' },
	{ name: 'Qtum', logo: '/storage/public/5b/50/7f2fd97d1.svg' },
	{ name: 'NEAR Protocol', logo: '/storage/public/ch/hm/t9eqer4qvgutb820.svg' },
	{ name: 'Dash', logo: '/storage/public/5c/7f/89d3856723g4c8d7g6.svg' },
	{ name: 'Polkadot', logo: '/storage/public/cg/0a/6cl40f5sud0mobig.svg' },
	{ name: 'Cosmos', logo: '/storage/public/5d/03/7304a7fed1a7h5e6d6.svg' }
];

export function getRandomNames(namesArray: string[] = names, count = 3) {
	const shuffled = [...namesArray].sort(() => Math.random() - 0.5);
	return shuffled.slice(0, count);
}

export const names = [
	'Oliver',
	'Emma',
	'Liam',
	'Ava',
	'Noah',
	'Sophia',
	'James',
	'Isabella',
	'Benjamin',
	'Mia',
	'Elijah',
	'Charlotte',
	'William',
	'Amelia',
	'Lucas',
	'Harper',
	'Henry',
	'Evelyn',
	'Alexander',
	'Abigail'
];

export const randomNames = getRandomNames(names);

export function getRandomProfit(min: number, max: number): string {
	return (Math.floor(Math.random() * (max - min + 1)) + min).toLocaleString('en-US');
}

// export const countries = [
// 	'Australia',
// 	'Brazil',
// 	'India',
// 	'Mexico',
// 	'Colombia',
// 	'Chile',
// 	'Costa Rica'
// ];

// export function getRandomCountry(): string {
// 	const randomIndex = Math.floor(Math.random() * countries.length);
// 	return countries[randomIndex];
// }
