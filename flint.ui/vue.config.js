// vue.config.js
module.exports = {
  devServer: {
    port: 8000,
    proxy: 'https://nice-bush-04fb02600.1.azurestaticapps.net',
  },
  runtimeCompiler: true
}
