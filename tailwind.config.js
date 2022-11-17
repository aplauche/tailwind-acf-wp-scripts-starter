/**
 * See https://tailwindcss.com/docs/configuration for configuration details
 */


const glob = require('glob')

module.exports = {
  content: [
    './blocks/**/*.php',
    './inc/**/*.php',
    './template-parts/**/*.php',
  ].concat(glob.sync("./*.php")),
  // have to use glob sync because otherwise base folder becomes tw dependency and infinite loop because of index.asset.php
  // glob returns array of actual files and this way build folder is definitively ignored
  theme: {},
  plugins: [],
  corePlugins: {
   container: false,
  //  preflight: false,
  }
}
