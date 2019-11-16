import { Vec } from "../utils/vector";

export const Wall = (data: any) => {
  return {
    name: "wall",
    type: "#",
    pos: Vec(data.x, data.y)
  };
};
