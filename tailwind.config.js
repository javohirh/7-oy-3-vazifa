/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-red": "#C61F1F",
        "main-gray": "#1D1D1D",
        "secondary-gray": "#111111",
        "main-text": "#777777",
        "text-gray": "#444444",
      },
    },
  },
  plugins: [],
};
