module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'babel-jest',
  },
  transform: {
    '^.+\\.(t|j)sx?$': 'babel-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?@react-native|react-native|@react-native-community|@react-native-picker|@inspire-app)",
  ],
  setupFiles: [
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts}',
    '!src/**/{translations,styles,types,constants,containers,assets,navigation}/**',
    '!src/**/styles.ts',
    '!src/core/network/**/*',
    '!**/node_modules/**',
    '!src/core/store/**/index.ts',
    '!src/core/store/bar/**/.ts',
    '!src/core/store/storeConfiguration.ts',
    '!App.tsx'
  ],
  globals: {
    __DEV__: true
  },
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 50,
      lines: 70,
      statements: 70,
    },
    './src/util/hooks/**/*.ts': {
      branches: 100,
      functions: 75,
      lines: 75,
      statements: 75,
    },
    './src/util/methods/**/*.ts': {
      branches: 100,
      functions: 75,
      lines: 75,
      statements: 75,
    },
    // Set coverage for slices and async thunks here
    // './src/core/store/**/*.thunk.ts': {
    //   branches: 75,
    //   functions: 75,
    //   lines: 75,
    //   statements: 75,

    // },
    // './src/core/store/**/*.slice.ts': {
    //   branches: 75,
    //   functions: 75,
    //   lines: 75,
    //   statements: 75,
    // },
    './src/core/selectors/*.ts': {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
};