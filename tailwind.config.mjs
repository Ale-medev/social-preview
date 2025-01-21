/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				white: {
					light: '#ECE5D5',
					DEFAULT: '#fff',
				},
				black: {
					light: '#1C2126',
					DEFAULT: '#111414',
					dark: '#000',
				},
				primary:{
					DEFAULT: '#BE1824',
				},
				grey:{
					light: '#f6f6f6',
					DEFAULT: '#e7e7e7',
					dark: '#b0b0b0'
				}
			},

			fontFamily: {
				'sans': ['Inter Variable', 'system-ui', 'sans-serif'],
				'serif': ['Melodrama', 'serif'],
				'display': ['ivypresto-display', 'serif'],
			},

			fontSize: {
				'body-xs': ['var(--font-body-xs)', {
					lineHeight: '1.5em',
					letterSpacing: '.03em',
					fontWeight: '400',
				}],

				'body-sm': ['var(--font-body-sm)', {
					lineHeight: '1.5em',
					letterSpacing: '0.01em',
					fontWeight: '400',
				}],

				'body-md': ['var(--font-body-md)', {
					lineHeight: '1.5em',
					letterSpacing: '0em',
					fontWeight: '400',
				}],

				'body-lg': ['var(--font-body-lg)', {
					lineHeight: '1.5em',
					letterSpacing: '.01em',
					fontWeight: '400',
				}],

				'label-sm': ['var(--font-sm)', {
					lineHeight: '1em',
					letterSpacing: '-0.01em',
					fontWeight: '700',
				}],

				'label-md': ['var(--font-label-md)', {
					lineHeight: '1em',
					letterSpacing: '0.1em',
					fontWeight: '600',
				}],

				'display-sm': ['var(--font-display-sm)', {
					lineHeight: '1em',
					letterSpacing: '0.1em',
					fontWeight: '100',
				}],

				'display-md': ['var(--font-display-md)', {
					lineHeight: '1.111em',
					letterSpacing: '0',
					fontWeight: '100',
				}],

				'display-lg': ['var(--font-display-lg)', {
					lineHeight: '1em',
					letterSpacing: '0',
					fontWeight: '100',
				}],

				'display-xl': ['var(--font-display-xl)', {
					lineHeight: '1em',
					letterSpacing: '0em',
					fontWeight: '100',
				}],
				'display-xxl': ['var(--font-display-xxl)', {
					lineHeight: '0.9em',
					letterSpacing: '0em',
					fontWeight: '100',
				}],
			},

			screens: {
				'sm': '768px',
				'md': '1440px',
			},
		},
	},
	plugins: [],
}
