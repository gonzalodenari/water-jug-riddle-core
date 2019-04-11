import { gcd } from "../../../src/core/util/Math"

describe("Math", () => {
  it("should return gcd", () => {
    expect(gcd(5, 4)).toBe(1);
    expect(gcd(9, 4)).toBe(1);
    expect(gcd(78, 45)).toBe(3);
  });
});
