import { Empty } from "./types/empty";
import { Wall } from "./types/wall";
import { Coin } from "./types/coin";
import { Player } from "./types/player";
import { Lava } from "./types/lava";
import { Platform } from "./types/platform";

const Types = new Map();
Types.set(".", Empty)
  .set("#", Wall)
  .set("o", Coin)
  .set("+", Lava)
  .set("@", Player)
  .set("=", Platform);

export { Types };
