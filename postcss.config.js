module.exports = () => ({
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      features: {
        'custom-properties': {
          warnings: false,
        },
        'custom-media-queries': {
          importFrom: 'src/styles/queries.css',
        },
      },
    },
  },
});
