type Position = {
  x: number;
  y: number;
};

const generatePosition = (
  x: number,
  y: number,
  message: string
): [number, number] => {
  const position: Position = { x, y };
  const cleanedMessage = cleanMessage(message);
  const finalPosition = positionControl(position, cleanedMessage);

  return [finalPosition.x, finalPosition.y];
};

const cleanMessage = (message: string): string[] => {
  return message
    .split("")
    .filter(
      (step) => step === "F" || step === "B" || step === "L" || step === "R"
    );
};

const positionControl = (
  initPosition: Position,
  message: string[]
): Position => {
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

exports.cleanMessage = cleanMessage;
exports.positionControl = positionControl;
exports.generatePosition = generatePosition;
