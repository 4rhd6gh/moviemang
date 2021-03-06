module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        textMainColor: "#abb7ca",
        textHighlightColor: "#dcf836",
        baseColor: "#1b1b1b;",
        headerBackgroundColor: "#0f2133",
        cardBackgroundColor: "#020d18",
        eventBarBackgroundColor: "#06121e",
        searchBarBackgroundColor: "#233a50",
        themePink: "#dd003f",
        movieCardBackgroundColor: "#020d18",
        profileDropDownBackgroundColor: "#06121e",
      },
    },
    screens: {
      tablet: { max: "1200px" },
      // => @media (max-width: 1200px) { ... }
      md: { max: "960px" },
      // => @media (max-width: 960px) { ... }
      mobile: { max: "767px" },
      // => @media (max-width: 640px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
