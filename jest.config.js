/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
		"src/**/*.{js,jsx}",
		"!src/styles/**/*.{js,jsx}",
		"!src/pages/**/*.{js,jsx}",
		"!src/services/**/*.{js,jsx}",
		"!src/Icons/**/*.{js,jsx}",
		"!src/models/**/*.{js,jsx}",
	],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
	setupFilesAfterEnv: ["<rootDir>/.jest/setup.js"],
	modulePaths: ["<rootDir>/src", "<rootDir>/.jest"],
};
