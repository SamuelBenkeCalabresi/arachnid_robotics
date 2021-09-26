const { MK1 } = require("../src/MK1");

describe("MK1 Movements", () => {
  let mk1;

  beforeEach(() => {
    mk1 = new MK1();
  });

  it("should generate the right tuple of coordinates", () => {
    const testPosition1 = mk1.generatePosition(
      0,
      0,
      "FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF"
    );
    expect(testPosition1).toEqual([21, -1]);

    const testPosition2 = mk1.generatePosition(
      3,
      6,
      "FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF"
    );
    expect(testPosition2).toEqual([16, 7]);

    const testPosition3 = mk1.generatePosition(
      0,
      7,
      "RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR"
    );
    expect(testPosition3).toEqual([8, 10]);
  });
});
