const path = require("path");

module.exports = {
  plugins: [{ plugin: [require("tailwindcss")] }],
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@data": path.resolve(__dirname, "src/data/"),
      "@page": path.resolve(__dirname, "src/pages/"),
    },
  },
};
