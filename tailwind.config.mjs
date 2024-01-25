/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'laravel-red': 'red',
				'react-blue': 'rgb(97, 219, 251)',
			},
			fontFamily: {
				'montserrat': 'Montserrat'
			}
		},
	},
	plugins: [],
}
