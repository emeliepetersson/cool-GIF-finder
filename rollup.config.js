import { terser } from "rollup-plugin-terser"; //med måsvingarna kan man hämta ut en specifik variabel från pluginet
import autoprefixer from "autoprefixer";
import babel from "rollup-plugin-babel";
import browsersync from "rollup-plugin-browsersync";
import commonjs from "@rollup/plugin-commonjs";
import cssNano from "cssnano";
import postcssNormalize from "postcss-normalize";
import filesize from "rollup-plugin-filesize";
import injectEnv from "rollup-plugin-inject-env";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";

// --environment NODE_ENV:production
const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = isProduction === false;

//Kör man import skriver man "export default {}" istället för "module.export{}"
export default {
  input: "src/scripts/index.js",
  output: {
    file: "public/giphy.js",
    format: "iife"
  },
  plugins: [
    resolve(),
    commonjs(),
    injectEnv(),
    babel({
      exclude: "node_modules/**"
    }),
    postcss({
      extract: true,
      sourceMap: isDevelopment,
      plugins: [postcssNormalize(), autoprefixer(), cssNano()]
    }),
    isDevelopment && browsersync({ server: "public", watch: true }),
    isProduction && terser(),
    isProduction && filesize()
  ]
};
