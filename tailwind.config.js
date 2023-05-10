/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      'colors': {
        'bg-links': '#1a1a1c',
        'bg-nav': '#000',
        'bg-link-hover': 'rgb(8 126 164/1)'
      }
    },
  },
  plugins: [],
}
