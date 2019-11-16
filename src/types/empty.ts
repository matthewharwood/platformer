import { Vec } from "../utils/vector";

export const Empty = data => {
  return {
    name: "empty",
    type: ".",
    pos: Vec(data.x, data.y)
  };
};
