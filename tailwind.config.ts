import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-nunitoSans)'
      },
      colors: {
        'blue-100': '#4B89AC',
        'blue-900': '#103f79',
        'light-blue': '#E0F7FA' ,
        'primary-button': '#FFBD30',
        'hover-button': '#B36B00',
        gray: { 
          100: '#bebebf',
          200: '#9e9ea0',
          300: '#727275',
          400: '#56565a',
          500: '#2c2c31',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: '#121215',
        },
      },
      fontSize: {
        xxs: '0.5rem'
      }
    },
  },
  plugins: [],
};
export default config;
