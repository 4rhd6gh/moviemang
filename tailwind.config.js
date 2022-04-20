module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      tablet: { max: "640px" },
      // => @media (max-width: 640px) { ... }

      laptop: { max: "1024px" },
      // => @media (max-width: 1024px) { ... }

      desktop: { max: "1280px" },
      // => @media (max-width: 1280px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
