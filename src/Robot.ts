import { Position } from "./types";

export abstract class Robot {
  constructor() {}

  generatePosition = (
    x: number,
    y: number,
    message: string
  ): [number, number] => {
    const position: Position = { x, y };
    const cleanedMessage = this.cleanMessage(message);
    if (cleanedMessage === null) return [x, y];
    const finalPosition = this.positionControl(position, cleanedMessage);
    return [finalPosition.x, finalPosition.y];
  };

  cleanMessage = (message: string): string[] | null => {
    if (message === "") return null;
    return message
      .split("")
      .filter(
        (step) => step === "F" || step === "B" || step === "L" || step === "R"
      );
  };

  abstract positionControl(initPosition: Position, message: string[]): Position;
}
