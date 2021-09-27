export const backward: { [key: string]: string } = {
  UP: "DOWN",
  RIGHT: "LEFT",
  DOWN: "UP",
  LEFT: "RIGHT",
};

export const left: { [key: string]: string } = {
  UP: "LEFT",
  RIGHT: "UP",
  DOWN: "RIGHT",
  LEFT: "DOWN",
};

export const right: { [key: string]: string } = {
  UP: "RIGHT",
  RIGHT: "DOWN",
  DOWN: "LEFT",
  LEFT: "UP",
};

export const maxBoosts = [1, 2, 3, 4, 5];

export const messageElements = [
  "F",
  "B",
  "L",
  "R",
  ...maxBoosts.map((number) => String(number)),
];
