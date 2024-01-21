/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html'],
	theme: {
		screens: {
			xl: { max: '1920px' },
			'desktop-l': { max: '1880px' },
			'desktop-m': { max: '1680px' },
			'laptop-x': { max: '1440px' },
			'laptop-m': { max: '1280px' },
			'aspect-pc': { min: '992px' },
			lg: { max: '1170px' },
			md: { max: '991px' },
			sm: { max: '767px' },
			xs: { max: '375px' },
			'2xl': '1921px',
			DEFAULT: '1320px',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '30px',
				xl: '3rem',
				lg: '3rem',
				md: '30px',
				sm: '18px',
				xs: '10px',
			},
		},
		fontFamily: {
			primary: ['Outfit', 'sans-serif'],
			secondary: ['Roboto', 'sans-serif'],
		},
		fontSize: {
			'large-title': '96px',
		},
		extend: {
			colors: {
				primary: '#0F172A',
			},
			backgroundImage: {
				// 'inner-cta':
				//   "linear-gradient( 90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.42) 61.04%, rgba(0, 0, 0, 0.24) 83.04%), url('../images/inner-content-bg.jpg')",
			},
		},
	},
};
