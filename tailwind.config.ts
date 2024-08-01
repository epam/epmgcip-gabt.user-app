import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'contact-info-contacts-bg': "url('/contact-info/contact-info-bg.png')",
				'contact-info-photo-img': "url('/contact-info/contact-info-img.jpg')"
			}
		},
		colors: {
			'dark-red': '#A80403',
			'creamy-yellow': 'rgba(241, 227, 189, 1)',
			white: '#FFF'
		}
	},
	plugins: []
}
export default config
