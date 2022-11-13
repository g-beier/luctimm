const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        black: '#18181e',
        white: '#e4e4ff',
      },
      width: {
        'sqrt-2': `${Math.sqrt(2) * 100}%`,
      },
      fontFamily: {
        sans: ["'Exo 2'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
