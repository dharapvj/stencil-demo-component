exports.config = {
  namespace: 'ButtonDropdownStencilTest',
  generateDistribution: true,
  bundles: [
    { components: ['button-dropdown'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
