export default {
  clearMocks: true,
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/tests/*.spec.ts"],
  collectCoverageFrom: ["src/**/*.ts"],
};
