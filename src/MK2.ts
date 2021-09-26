import { Position } from "./types";
import { Robot } from "./Robot";
import { backward, left, right } from "./setups";

export class MK2 extends Robot {
  positionControl = (initPosition: Position, message: string[]): Position => {
    let position = initPosition;
    // assumption direction state starting is forward
    let currentState = "UP";

    message.forEach((step) => {
      // MK2 F it's the only case to actually change position
      if (step === "F") {
        position = this.goForwards(position, currentState);
        // All other cases change direction
      } else if (step === "B") {
        currentState = backward[currentState];
      } else if (step === "L") {
        currentState = left[currentState];
      } else if (step === "R") {
        currentState = right[currentState];
      }
    });
    return position;
  };

  private goForwards = (
    initPosition: Position,
    stateDirection: string
  ): Position => {
    let position = initPosition;
    if (stateDirection === "UP") {
      position.x++;
    } else if (stateDirection === "RIGHT") {
      position.y++;
    } else if (stateDirection === "DOWN") {
      if (position.x > 0) position.x--;
    } else if (stateDirection === "LEFT") {
      if (position.y > 0) position.y--;
    }
    return position;
  };
}
