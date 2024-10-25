/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				flash: {
					"0%, 100%": { backgroundColor: "#fbbf24" }, // Amarelo inicial
					"50%": { backgroundColor: "#f59e0b" }, // Amarelo mais escuro no meio
				},
			},
			animation: {
				"flash-infinite": "flash 1s infinite", // Animação piscando infinitamente
			},
		},
	},
	plugins: [],
};
