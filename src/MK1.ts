import { Position } from "./types";
import { Robot } from "./Robot";

export class MK1 extends Robot {
  positionControl = (initPosition: Position, message: string[]): Position => {
    let position = initPosition;
    message.forEach((step) => {
      if (step === "F") {
        position.x++;
      } else if (step === "B") {
        position.x--;
      } else if (step === "L") {
        position.y--;
      } else if (step === "R") {
        position.y++;
      }
    });
    return position;
  };
}
