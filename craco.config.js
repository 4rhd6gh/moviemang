const path = require("path");

module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    alias: {
      "@data": path.resolve(__dirname, "src/data/"),
      "@page": path.resolve(__dirname, "src/pages/"),
      "@component": path.resolve(__dirname, "src/components/"),
    },
  },
};
