/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        comic: ['"Bangers"', "cursive"],
        marker: ['"Permanent Marker"', "cursive"],
        body: ['"Inter"', "sans-serif"],
      },
      colors: {
        "brand-yellow": "#FFF9C4", // Pale yellow background
        "brand-red": "#E53935",
        "brand-orange": "#FB8C00",
        "brand-blue": "#4FC3F7",
        "brand-green": "#69F0AE",
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
