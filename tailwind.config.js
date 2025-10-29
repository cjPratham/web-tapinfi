/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: "#100425",
        accent: "#5AA4F4",
        secondary: "#0E2D6E",
        textPrimary: "#FFFFFF",
        textSecondary: "#C1C1D0",
        cardBg: "rgba(255,255,255,0.08)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(180deg, #100425 0%, #0E2D6E 100%)",
        "accent-gradient": "linear-gradient(90deg, #5AA4F4 0%, #9E00FF 100%)",
      },
      boxShadow: {
        glow: "0 0 25px rgba(90,164,244,0.6)",
      },
    },
  },
}
