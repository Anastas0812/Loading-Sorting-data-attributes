import demo from "./app";

beforeAll(() => {
  global.document = {
    addEventListener: jest.fn(),
    querySelector: jest.fn(),
    querySelectorAll: jest.fn(() => []),
    createElement: jest.fn(() => ({
      setAttribute: jest.fn(),
      appendChild: jest.fn(),
      textContent: ''
    }))
  };
});

describe("Пример теста", () => {
  test.each([
    { str: "Hello!", expected: "Demo: Hello!" },
    { str: "", expected: "Demo: " },
    { str: 100, expected: "Demo: 100" },
  ])("demo($str)", ({ str, expected }) => {
    expect(demo(str)).toBe(expected);
  });
});
