import { evenOrdd } from "@/playground.js";

describe("basic Math", () => {
  it("add two numbers", () => {
    expect(1 + 1).toBe(2);
  });

  it("sss", () => {
    expect(5 - 3).toBe(2);
    // expect(5 - 3).toBe(5);
  });
});
describe("evenOrdd", () => {
  describe("when the number is even", () => {
    it("is even", () => {
      expect(evenOrdd(4)).toBe("Even");
    });
  });

  describe("when the number is odd", () => {
    it("is even", () => {
      expect(evenOrdd(3)).toBe("Odd");
    });
  });
});
