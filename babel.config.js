module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module:react-native-dotenv", {
        moduleName: "react-native-dotenv",
        path: ".env",
        safe: false,
        allowUndefined: true,
        verbose: false
      }],
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            '@app': './src',
            '@components': './src/components',
            '@containers': './src/containers',
            '@navigation': './src/navigation',
            '@core': './src/core',
            '@styles': './src/styles',
            '@hooks': './src/util/hooks',
            '@methods': './src/util/methods',
            '@network': './src/core/network',
            '@selectors': './src/core/selectors',
            '@actions': './src/core/store/index',
          },
        },
      ],
    ],
  };
};
