const { MK1 } = require("../src/MK1");

describe("Robot using MK1 extension", () => {
  let mk1;

  beforeEach(() => {
    mk1 = new MK1();
  });

  it("should be cleaned from other letters", () => {
    const cleanedMessage = mk1
      .cleanMessage("FRFRFFFQQQFFFFLLLLZZZZZFFFFFRFZZFFFLZZZZFFLRRFCCCQQQQ")
      .join("");
    expect(cleanedMessage).toEqual("FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF");
  });

  it("should return null for empty string", () => {
    const cleanedMessage = mk1.cleanMessage("");
    expect(cleanedMessage).toBe(null);
  });
});
