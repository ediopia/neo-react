module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig-base.json",
      diagnostics: false,
    },
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  coveragePathIgnorePatterns: ["<rootDir>/packages/.*/lib/", "<rootDir>/packages/.*/dist/"],
};
