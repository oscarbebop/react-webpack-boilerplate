import { add } from "./mathFunctions";

describe("Math Functions", () => {
  test("add function", () => {
    expect(add(5, 5)).toBe(10);
  });
});
