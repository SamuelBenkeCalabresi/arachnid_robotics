const { MK2 } = require("../src/MK2");

describe("MK2 Movements", () => {
  let mk2;

  beforeEach(() => {
    mk2 = new MK2();
  });

  it("should generate the right tuple of coordinates", () => {
    const testPosition1 = mk2.generatePosition(
      0,
      0,
      "FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF"
    );
    expect(testPosition1).toEqual([0, 0]);

    const testPosition2 = mk2.generatePosition(
      3,
      6,
      "FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF"
    );
    expect(testPosition2).toEqual([11, 5]);

    const testPosition3 = mk2.generatePosition(
      0,
      7,
      "RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR"
    );
    expect(testPosition3).toEqual([11, 9]);
  });
});

describe("MK2 Directions", () => {
  let mk2;

  beforeEach(() => {
    mk2 = new MK2();
  });

  it("should use backward to move from currrent direction to its opposite", () => {
    const newPosition = mk2.generatePosition(0, 0, "FFFBFFFBBBRBF");
    expect(newPosition).toEqual([0, 0]);
  });

  it("should use right and left to move from current direction to its next", () => {
    const newPosition = mk2.generatePosition(0, 0, "FFFRFFFRFFFRFFF");
    expect(newPosition).toEqual([0, 0]);
  });

  it("should not go into negative spaces", () => {
    const newPosition = mk2.generatePosition(0, 0, "BFFFFFRFFFFFRF");
    expect(newPosition).toEqual([1, 0]);
  });
});
