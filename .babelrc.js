'use strict';

const options = {
  presets: [["@babel/env", { loose: true }], "@babel/preset-typescript"],
  plugins: []
};

console.log("begin to build; Babel env is ", process.env.BABEL_ENV, '.');

if (process.env.BABEL_ENV === "commonjs") {
  options.plugins.push([
    "@babel/plugin-transform-modules-commonjs",
    {
      allowTopLevelThis: true
    }
  ]);
}
module.exports = options;
