const {
  cleanMessage,
  positionControl,
  generatePosition,
} = require("../src/main");

describe("Robot Message", () => {
  it("should be cleaned from other letters", () => {
    const cleanedMessage = cleanMessage(
      "FRFRFFFFFFFLLLLZZZZZFFFFFRFZZFFFLZZZZFFLRRFCCC"
    ).join("");
    expect(cleanedMessage).toEqual("FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF");
  });
});
