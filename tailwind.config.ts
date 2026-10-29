import type { Config } from "tailwindcss";

// Davao EXPO poster look: blue sky fading into a golden Sydney sunset, EXPO navy-blue, white rounded cards, Montserrat type.
// Token names are kept from the shared build so every component re-themes at once:
//   primary = poster EXPO blue (50 is a pale sky tint used for section grounds), navy = deep navy text,
//   accent = sunset gold, coral = Australian-flag red, slate = the "Davao City" grey-blue.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EEF6FD",
          100: "#E2EFF8",
          300: "#8CC0E3",
          500: "#0A6EA6",
          700: "#045584",
          900: "#033D60",
        },
        navy: {
          100: "#DCE8F2",
          300: "#5B6C82",
          700: "#12284A",
          900: "#0D1F3A",
        },
        accent: {
          100: "#FFF4D0",
          500: "#F7C548",
          600: "#EDB52A",
        },
        coral: { 500: "#E4002B" },
        sky: { 500: "#1A8DCE", 700: "#1888C7", 300: "#49A6D8" },
        cream: "#F5FBFF",
        slate: { 500: "#7A8B9C" },
        neutral: {
          50: "#FFFDFA",
          100: "#F6F3EE",
          200: "#E7E3DC",
          400: "#8C8A84",
          600: "#4A4844",
          700: "#3B3A36",
          900: "#12110F",
        },
      },
      fontFamily: {
        heading: ["var(--font-main)", "system-ui", "sans-serif"],
        sans: ["var(--font-main)", "system-ui", "sans-serif"],
        script: ["var(--font-yellowtail)", "cursive"],
      },
      fontSize: {
        "ds-small": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
        "ds-h2": ["2.625rem", { lineHeight: "1.15", fontWeight: "600" }],
      },
      backgroundImage: {
        bar: "linear-gradient(90deg, #0A6EA6 0%, #045584 100%)",
        sky: "linear-gradient(180deg, #6CA9DF 0%, #B6D1EF 42%, #FFF1CF 100%)",
        fade: "linear-gradient(0deg, rgba(18,17,15,.85) 0%, rgba(18,17,15,0) 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
