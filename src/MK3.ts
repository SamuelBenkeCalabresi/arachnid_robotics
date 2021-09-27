import { Position } from "./types";
import { Robot } from "./Robot";
import { backward, left, right, messageElements } from "./setups";

export class MK3 extends Robot {
  fuel = 30;

  cleanMessage = (message: string): string[] | null => {
    if (message === "") return null;
    return message.split("").filter((step) => messageElements.includes(step));
  };

  positionControl = (initPosition: Position, message: string[]): Position => {
    let position = initPosition;
    // assumption direction state starting is forward
    let currentState = "UP";

    message.forEach((step, index) => {
      // MK3 F can have a precedent number that makes goForwards the times of the number
      if (step === "F" && !isNaN(Number(message[index - 1]))) {
        position = this.goBoost(
          position,
          currentState,
          Number(message[index - 1])
        );
      } else if (step === "F") {
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

  private goBoost = (
    initPosition: Position,
    stateDirection: string,
    numberBoost: number
  ): Position => {
    let position = initPosition;
    for (let i = 0; i < numberBoost; i++) {
      // boost work only if there's enough fuel
      if (this.fuel > 0) {
        position = this.goForwards(position, stateDirection);
        this.fuel--;
      }
    }
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
      position.x--;
    } else if (stateDirection === "LEFT") {
      position.y--;
    }
    return position;
  };
}
