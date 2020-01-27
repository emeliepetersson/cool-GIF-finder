const browsersync = require("rollup-plugin-browsersync");
import { terser } from "rollup-plugin-terser"; //med måsvingarna kan man hämta ut en specifik variabel från pluginet
import postcss from "rollup-plugin-postcss";
const postcssNormalize = require("postcss-normalize");
const autoprefixer = require("autoprefixer");
const cssNano = require("cssnano");

// --environment NODE_ENV:production
const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = isProduction === false;

console.log("is produktion: ", isProduction);
console.log("is development: ", isDevelopment);

module.exports = {
  input: "src/scripts/index.js",
  output: {
    file: "public/giphy.js",
    format: "iife"
  },
  plugins: [
    isDevelopment && browsersync({ server: "public", watch: true }),
    isProduction && terser(),
    postcss({
      extract: true,
      sourceMap: isDevelopment,
      plugins: [postcssNormalize(), autoprefixer(), cssNano()]
    })
  ]
};
