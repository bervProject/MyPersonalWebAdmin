import type { Config } from 'jest';
const config: Config = {
  preset: "ts-jest",
  collectCoverage: true,
  testEnvironment: "jsdom",
  collectCoverageFrom: ["**/src/**/*.{ts,tsx}"],
  coverageDirectory: "./coverage/",
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    "^axios$": require.resolve("axios"),
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
  ],
};

export default config;
