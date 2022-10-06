const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(({ addBase, theme }) => {
			addBase({
				'h1': { fontSize: theme('fontSize.5xl'), fontWeight: theme('fontWeight.bold') },
				'h2': { fontSize: theme('fontSize.4xl'), fontWeight: theme('fontWeight.bold') },
				'h3': { fontSize: theme('fontSize.3xl'), fontWeight: theme('fontWeight.bold') },
				'h4': { fontSize: theme('fontSize.2xl') },
				'h5': { fontSize: theme('fontSize.xl') },
				'h6': { fontSize: theme('fontSize.md') },
			})
		})
	],
}
