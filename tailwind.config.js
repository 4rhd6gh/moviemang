module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        headerbg: "#417D7A",
        textMainColor: "white",
        textSideColor: "#a5a5a5",
        baseColor: "#1b1b1b;",
        CardBgColor: "#DDDDDD",
        CardBgColor2: "#FFEEEE",
        CardBgColor3: "#EEF2FF",
        CardBgColor4: "#3A3845",
        CardBgColor5: "#B7CADB",
        CardBgColor6: "#F7F7F7",
        CardBgColor7: "#789395",
        CardBgColor8: "#2C3333",
        CardBgColor9: "#FFAFAF",
      },
    },
    screens: {
      mobile: { max: "640px" },
      // => @media (max-width: 640px) { ... }

      tablet: { max: "1200px" },
      // => @media (max-width: 1024px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
