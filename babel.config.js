module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './src/components',
          screens: './src/screens',
          assets: './src/assets',
          icons: './src/assets/icons',
          images: './src/assets/images',
          ui: './src/ui',
          navigations: './src/navigations',
          hooks: './src/hooks',
          atoms: './src/atoms',
          queries: './src/queries',
          mutations: './src/mutations',
          constants: './src/constants',
          utils: './src/utils',
        },
      },
    ],
  ],
};
