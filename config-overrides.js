var InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function override(config, env) {
  const plugins = config.plugins;
  plugins.forEach((plugin, index) => {
    if (plugin instanceof InlineChunkHtmlPlugin) {
      // Inline all javascript file so it produces only one index.html
      const overridePlugin = new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/\.js/]);
      plugins[index] = overridePlugin;
    }
  });
  return config;
}
