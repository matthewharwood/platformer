import _ from "lodash";
import { tileWidth, tileHeight } from "./";
import { render } from "./render";
const movePlayer = gameData => {
  const moveHandler = e => {
    console.log(e.key);
    if (e.key === "d" || e.key === "ArrowRight") {
      console.log("D");
      gameData.forEach(row => {
        row.forEach(col => {
          if (col.name === "player") {
            col.pos[0]++;
            render(col, tileWidth, tileHeight);
          }
        });
      });
    }
    if (e.key === "s" || e.key === "ArrowDown") {
      console.log("S");
    }
    if (e.key === "a" || e.key === "ArrowLeft") {
      console.log("A");
    }
    if (e.key === "w" || e.key === "ArrowUp") {
      console.log("W");
    }
  };
  const handle = _.throttle(moveHandler, 1000);
  window.addEventListener("keydown", handle);
};
export { movePlayer };
