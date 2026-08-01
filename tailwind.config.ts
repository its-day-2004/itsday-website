import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mint: {
          50: "#edf8f4",
          100: "#d8f0e8",
          300: "#82cdb9",
          500: "#4aa990",
          700: "#247260"
        },
        trust: {
          900: "#0b3f46",
          800: "#10535b",
          700: "#176773"
        },
        coral: "#ee765f",
        paper: "#fbfaf7"
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(11, 63, 70, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
