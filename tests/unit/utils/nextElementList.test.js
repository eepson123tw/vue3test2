import nextElementList from "@/utils/nextElementList.js";

describe("nextElementList", () => {
  it("locates element in List and returns the next element in List", () => {
    const list = ["A", "B", "C", "D", "E"];
    const value = "C";
    const res = nextElementList(list, value);
    expect(res).toBe("D");
  });

  describe("When element is at the end of list", () => {
    it("locates next element at start of the list", () => {
      const list = ["A", "B", "C", "D", "E"];
      const value = "E";
      const res = nextElementList(list, value);
      expect(res).toBe("A");
    });
  });
});
