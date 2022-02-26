module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './src/components',
          flags: './src/assets/flags',
          images: './src/assets/images',
          utils: './src/utils',
        },
      },
    ],
  ],
  };
};
