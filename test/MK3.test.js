const { MK3 } = require("../src/MK3");

describe("MK3 Movements", () => {
  let mk3;

  beforeEach(() => {
    mk3 = new MK3();
  });

  it("should generate the right tuple of coordinates", () => {
    const testPosition1 = mk3.generatePosition(
      0,
      0,
      "FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF"
    );
    expect(testPosition1).toEqual([-13, -4]);

    const testPosition2 = mk3.generatePosition(
      3,
      6,
      "FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF"
    );
    expect(testPosition2).toEqual([11, 5]);

    const testPosition3 = mk3.generatePosition(
      0,
      7,
      "RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR"
    );
    expect(testPosition3).toEqual([11, 9]);
  });
});

describe("MK3 Boosts", () => {
  let mk3;

  beforeEach(() => {
    mk3 = new MK3();
  });

  it("should use boosts to move as the value of the number", () => {
    const newPosition = mk3.generatePosition(
      4,
      3,
      "FFFFFFFF5FRFFFFFF3FRFFFFFFLFFFFF5FFF5FFFFFFFLFFFFF"
    );
    expect(newPosition).toEqual([16, 35]);
  });

  it("should use right and left to move from current direction to its next", () => {
    const newPosition = mk3.generatePosition(0, 0, "FFFRFFFRFFFRFFF");
    expect(newPosition).toEqual([0, 0]);
  });

  it("should go into negative spaces", () => {
    const newPosition = mk3.generatePosition(0, 0, "FFFFFF3FLFFFFFFR5FL");
    expect(newPosition).toEqual([14, -6]);
  });

  it("should decrement fuel when boost is used", () => {
    mk3.generatePosition(0, 0, "5FR5F1F2F3F4F");
    expect(mk3.fuel).toBe(10);
    mk3.generatePosition(0, 0, "5FR5F");
    expect(mk3.fuel).toBe(0);
  });

  it("should not boost when fuel arrives at 0", () => {
    mk3.generatePosition(0, 0, "5F5F5FB5F5F5F");
    expect(mk3.fuel).toBe(0);
    const newPosition = mk3.generatePosition(0, 0, "3FR3F");
    expect(newPosition).toEqual([0, 0]);
  });
});
