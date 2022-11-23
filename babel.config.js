module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    //if you already have other plugin just paste this lines below
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@atoms': './src/Components/Atoms/index',
          '@molecules': './src/Components/Molecules/index',
          // '@hooks': './src/hooks/index',
        },
      },
    ],
  ],
};
