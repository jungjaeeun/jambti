/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#76c100",
        primaryActive: "rgb(118 193 0 / 55%)",
        secondary: "#f65a05",
        secondaryActive: "rgb(246 90 5 / 55%)",
        thirdly: "#febb00",
        text: "#243700",
      },
    },
  },
  plugins: [],
};
