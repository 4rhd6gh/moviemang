module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      mobile: { max: "640px" },
      // => @media (max-width: 640px) { ... }

      tablet: { max: "1024px" },
      // => @media (max-width: 1024px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
