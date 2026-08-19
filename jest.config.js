/** @type {import("jest").Config} **/
export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        // Le decimos a ts-jest que convierta los imports a requires internamente para los tests
        tsconfig: {
          module: "CommonJS",
        },
      },
    ],
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};