const { cleanMessage, generatePosition } = require("../src/main");

describe("Robot Message", () => {
  it("should be cleaned from other letters", () => {
    const cleanedMessage = cleanMessage(
      "FRFRFFFQQQFFFFLLLLZZZZZFFFFFRFZZFFFLZZZZFFLRRFCCCQQQQ"
    ).join("");
    expect(cleanedMessage).toEqual("FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF");
  });
  it("should return null for empty string", () => {
    const cleanedMessage = cleanMessage("");
    expect(cleanedMessage).toBe(null);
  });
});

describe("Robot Position", () => {
  it("should generate the right tuple of coordinates", () => {
    const testPosition1 = generatePosition(
      0,
      0,
      "FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF"
    );
    expect(testPosition1).toEqual([21, -1]);

    const testPosition2 = generatePosition(
      3,
      6,
      "FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF"
    );
    console.log(testPosition2);
    expect(testPosition2).toEqual([16, 7]);

    const testPosition3 = generatePosition(
      0,
      7,
      "RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR"
    );
    console.log(testPosition3);
    expect(testPosition3).toEqual([8, 10]);
  });
});
