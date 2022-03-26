// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  roots: ["<rootDir>", "<rootDir>/src"],
  modulePaths: ["<rootDir>", "<rootDir>/src"],
  moduleDirectories: ["node_modules"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
