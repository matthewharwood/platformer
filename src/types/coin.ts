import { Vec } from "../utils/vector";

export const Coin = data => {
  return {
    name: "coin",
    type: "o",
    pos: Vec(data.x, data.y)
  };
};
