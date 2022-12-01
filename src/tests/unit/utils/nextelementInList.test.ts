import nextelement from '@/utils/nextElementInList';

describe("nextelementInList", () => {
  it("loactes element in list and returns the next elment in list", () => {
    const list = ["A", "B", "C", "D", "E"];
    const val = "C";
    expect(nextelement(list, val)).toBe("D");
  });
  it("when element is at the end of the list", () => {
    const list = ["A", "B", "C", "D", "E"];
    const val = "E";
    expect(nextelement(list, val)).toBe("A");
  })
})