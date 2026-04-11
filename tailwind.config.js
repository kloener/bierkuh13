module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        bierkuh: {
          grey: "var(--grey-color)",
          bg: "var(--bg-color)",
        },
        surface: "rgba(0, 0, 0, 0.5)",
        "surface-muted": "rgba(0, 0, 0, 0.35)",
      },
      fontFamily: {
        sans: ["var(--global-font-family)", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        ring: "0 0 0 2px var(--bg-color), 0 0 0 4px var(--primary-color)",
      },
      borderRadius: {
        ui: "0.625rem",
      },
    },
  },
  plugins: [],
}
