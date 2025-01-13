// https://velog.io/@she1018/Next.js%EC%97%90%EC%84%9C-Tailwind-CSS-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-0h0smx5q

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#76c100",
        secondary: "#f65a05",
        thirdly: "#febb00",
        text: "#243700",
      },
    },
  },
  plugins: [],
};
