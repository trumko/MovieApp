module.exports = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss|less)$": "identity-obj-proxy"
  },
  snapshotSerializers: [
    "enzyme-to-json/serializer"
  ],
  setupFiles: ['<rootDir>/enzyme.config.js'],
  moduleDirectories: [
    "node_modules",
    "src"
  ]
};
