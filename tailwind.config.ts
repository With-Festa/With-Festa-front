import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundColor: {
				pink: '#FCE8F1',
			},
			boxShadow: {
				'3xl': '0 35px 60px -15px rgba(0,0,0,0.3)',
				'2md': '0 1px 10px 0 rgba(0,0,0,0.05)',
			},
		},
	},
	plugins: [],
};
export default config;
