const path = require('path');
const { createWebpackAliases } = require('./webpack.helpers');

function configAliasPath(restPath) {
  const src = '/src/';

  return path.resolve(__dirname, '..', `${src}${restPath}`);
}

module.exports = createWebpackAliases({
  app: configAliasPath('app'),
  api: configAliasPath('api'),
  assets: configAliasPath('assets'),
  components: configAliasPath('components'),
  constants: configAliasPath('constants'),
  enums: configAliasPath('enums'),
  hooks: configAliasPath('hooks'),
  pages: configAliasPath('pages'),
  routes: configAliasPath('routes'),
  services: configAliasPath('services'),
  store: configAliasPath('store'),
  styles: configAliasPath('styles'),
  types: configAliasPath('types'),
  utils: configAliasPath('utils'),
});
