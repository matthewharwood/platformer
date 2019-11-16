import { Vec } from "../utils/vector";

export const Player = data => {
  return {
    pos: Vec(data.x, data.y),
    name: "player",
    type: "@"
  };
};
