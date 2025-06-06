import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: ["dark"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			fontFamily: {
				amatic: ['Amatic SC', 'sans-serif'],
				georgia: ['Georgia', 'serif'],
				maven: ['Maven', 'sans-serif'],
				cherry: ['Cherry Bomb', 'sans-serif'],

				karla: ['Karla', 'sans-serif'],
				ubuntu: ['Ubuntu', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
				source: ['Source Sans 3', 'sans-serif'],
				sans2: ['Poppins', 'sans-serif'],
				sans3: ['FunnelSans', 'sans-serif'],
				sans4: ['Quicksand', 'sans-serif'],
				display1: ['GloriaHallelujah', 'serif'],
				display2: ['LondrinaOutline', 'sans-serif'],
				display3: ['LondrinaSolid', 'sans-serif'],
				oswald: ['Oswald', 'sans-serif'],
				fjalla: ['Fjalla One', 'sans-serif'],

				mono1: ['Inconsolata', 'mono'],
				'input-serif': ['InputSerif', 'mono'],

				itc: ['ITC', 'sans-serif'],
				'funnel-display': ['FunnelDisplay', 'sans-serif'],
				'yuji-boku': ['YujiBoku-Regular', 'serif'],
				'yuji-syuku': ['YujiSyuku-Regular', 'serif'],
				'zen-loop': ['ZenLoop', 'sans-serif'],
				'alumni-sans-pinstripe': ['AlumniSansPinstripe', 'sans-serif'],
				'eigerdals': ['EigerdalsReg', 'sans-serif'],
				'futura-book': ['FuturaBook', 'sans-serif'],
				'futura-heavy': ['FuturaHeavy', 'sans-serif'],
				'lora': ['Lora', 'serif'],
				'gilbert': ['GilbertColour', 'sans-serif'],
				'bebas': ['BebasSemiRounded', 'sans-serif'],
				'novecento': ['Novecento', 'sans-serif'],
				'novecento-demi': ['NovecentoDemi', 'sans-serif'],
				'montserrat': ['Montserrat', 'sans-serif'],
				'finalsix': ['FinalSix', 'sans-serif'],
			},

			colors: {
				'bc-green1': '#4c803f',
				'bc-yellow1': '#ffeba0',
				'bc-brown1': '#bb7731',
				'bc-black1': '#241c13',

				'bc-coral-pink': '#FF8F8F',
				'bc-pastel-red': '#FF6F61',
				'bc-sky-blue': '#6AC4FF',
				'bc-soft-green': '#6BBF8A',
				'bc-lime-green': '#C6E86F',
				'bc-vivid-green': '#4CAF50',
				'bc-warm-brown': '#8B572A',
				'bc-golden-yellow': '#FFC300',
				'bc-bright-orange': '#FF8C42',
				'bc-soft-yellow': '#FFF3B0',
				'bc-soft-black': '#2C2C2C',
				'bc-wellness-blue': '#3A7CA5',

				'bc-og-light-green': '#aeca7f',
				'bc-ai-muted-forest-green': '#4a7c59',
				'bc-ai-warmer-light-red': '#ff9999',
				'bc-ai-cooler-light-blue': '#66b3ff',

				'my-light-blue': 'rgb(11, 154, 236)',
				'my-dark-blue': '#164962',

				'recoupe-green': '#627d48',
				'recoupe-light-yellow': '#e9eb98',
				'recoupe-brown': '#655210',
				'recoupe-light-orangey-brown': '#e6b777',
				'recoupe-dark-orangey-brown': '#e18a2f',

				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary) / <alpha-value>)",
					foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)"
				},
				sidebar: {
					DEFAULT: "hsl(var(--sidebar-background))",
					foreground: "hsl(var(--sidebar-foreground))",
					primary: "hsl(var(--sidebar-primary))",
					"primary-foreground": "hsl(var(--sidebar-primary-foreground))",
					accent: "hsl(var(--sidebar-accent))",
					"accent-foreground": "hsl(var(--sidebar-accent-foreground))",
					border: "hsl(var(--sidebar-border))",
					ring: "hsl(var(--sidebar-ring))",
				},

			},

			borderRadius: {
				xl: "calc(var(--radius) + 4px)",
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},

			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--bits-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--bits-accordion-content-height)" },
					to: { height: "0" },
				},
				"caret-blink": {
					"0%,70%,100%": { opacity: "1" },
					"20%,50%": { opacity: "0" },
				},
			},

			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"caret-blink": "caret-blink 1.25s ease-out infinite",
			},
		},
	},

	plugins: [tailwindcssAnimate],
};

export default config;
