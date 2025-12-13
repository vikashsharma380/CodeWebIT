/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#AAAAAA",
        background: "#0A0A0A",
        accent: "#1E90FF", // DodgerBlue
        card: "#1A1A1A",
        border: "#2A2A2A",
      },
    },
  },
  plugins: [],
};
