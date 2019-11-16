import { Vec } from "../utils/vector";

export const Lava = data => {
  return {
    name: "lava",
    type: "+",
    pos: Vec(data.x, data.y)
  };
};
