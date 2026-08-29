/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{html,js}"],
	theme: {
		extend: {
			boxShadow: {
				"card-soft": "0 6px 24px rgba(33, 49, 71, 0.04)",
				"card-hover": "0 6px 24px rgba(33, 49, 71, 0.08)",
			},
		},
	},
	plugins: [],
};
