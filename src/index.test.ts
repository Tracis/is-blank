import isBlank from "./index";

test("true is false and false is true", () => {
  expect(isBlank(false)).toBe(true);
  expect(isBlank(true)).toBe(false);
});

test("number except NaN is false", () => {
  expect(isBlank(0)).toBe(false);
  expect(isBlank(-1)).toBe(false);
  expect(isBlank(1100)).toBe(false);
  expect(isBlank(NaN)).toBe(true);
});

test("empty string is true", () => {
  expect(isBlank("")).toBe(true);
  expect(isBlank("  ")).toBe(true);
  expect(isBlank("\r\t\n")).toBe(true);
});

test("null is true", () => {
  expect(isBlank(null)).toBe(true);
});

test("undefined is true", () => {
  expect(isBlank(undefined)).toBe(true);
});

test("an empty function is true", () => {
  expect(isBlank(function() {})).toBe(true);
});

test("a function with arguments is false", () => {
  expect(isBlank(function(a: any, b: any) {})).toBe(false);
});

test("an empty array is true", () => {
  expect(isBlank([])).toBe(true);
});

test("an empty plain object is true", () => {
  expect(isBlank({})).toBe(true);
  expect(isBlank({a: {}})).toBe(false);
});

