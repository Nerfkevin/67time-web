import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
        sans: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#1A1A1A', // 67Time background
        foreground: '#FFFFFF', // 67Time text
        primary: {
          DEFAULT: '#FF3B30', // 67Time primary/accent
          foreground: '#FFFFFF'
        },
        secondary: {
          DEFAULT: '#252525', // 67Time surface
          foreground: '#FFFFFF'
        },
        muted: {
          DEFAULT: '#252525',
          foreground: '#888888' // 67Time textSecondary
        },
        accent: {
          DEFAULT: '#FF3B30',
          foreground: '#FFFFFF'
        },
        card: {
          DEFAULT: '#252525', // 67Time surface
          foreground: '#FFFFFF'
        },
        border: 'rgba(255, 255, 255, 0.1)', // 67Time surfaceBorder
        input: '#333333', // 67Time backgroundTertiary
        ring: '#FF3B30',
        
        // Shadcn UI specific mappings if needed
        popover: {
          DEFAULT: '#252525',
          foreground: '#FFFFFF'
        },
        destructive: {
          DEFAULT: '#FF453A', // 67Time error
          foreground: '#FFFFFF'
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
      }
    }
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
