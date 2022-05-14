const path = require("path");

module.exports = {
  plugins: [
    {
      plugin: [require("tailwindcss"), require("autoprefixer")],
    },
  ],
  webpack: {
    alias: {
      "@data": path.resolve(__dirname, "src/data/"),
      "@page": path.resolve(__dirname, "src/pages/"),
      "@component": path.resolve(__dirname, "src/components/"),
      "@constant": path.resolve(__dirname, "src/constants"),
      "@api": path.resolve(__dirname, "src/services/apis"),
      "@service": path.resolve(__dirname, "src/services"),
      "@data": path.resolve(__dirname, "src/data/"),
      "@hook": path.resolve(__dirname, "src/hooks/"),
    },
  },
};
