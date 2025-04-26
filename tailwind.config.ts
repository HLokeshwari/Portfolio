
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
				  DEFAULT: '#8B5CF6', // accent purple
				  foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				dark: "#403E43",
				light: "#F8F9FA",
			},
			boxShadow: {
				card: "0 4px 24px rgba(139, 92, 246, 0.08)",
			},
			animation: {
				'fade-in': 'fade-in 0.7s ease-in',
				'slide-in': 'slide-in 0.7s cubic-bezier(.35,1.32,.74,1.01)'
			},
			keyframes: {
				'fade-in': {
					"0%": { opacity: 0, transform: "translateY(16px)" },
					"100%": { opacity: 1, transform: "translateY(0)" },
				},
				'slide-in': {
					"0%": { transform: "translateX(-48px)", opacity: 0 },
					"100%": { transform: "translateX(0)", opacity: 1 },
				}
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
