/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#BF092F",
        secondary: "#16476A",
        accent: "#3B9797",
        dark: "#132440",
        "nav-scrolled": "#132440",
        "nav-transparent": "transparent",
      },
    },
  },
  darkMode: false, // disables dark mode entirely
  plugins: [], // no DaisyUI
};
