module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  setupFiles: ['<rootDir>/src/jest/setup.js'],
  transformIgnorePatterns: ['node_modules/(?!(jest-)?react-native|native-base)'],
  coveragePathIgnorePatterns: ['/node_modules/', '/jest'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
