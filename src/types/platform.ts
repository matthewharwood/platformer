import { Vec } from "../utils/vector";

export const Platform = data => {
  return {
    name: "platform",
    type: "=",
    pos: Vec(data.x, data.y)
  };
};
