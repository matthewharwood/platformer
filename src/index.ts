import { levels } from "./levels";
import { Types } from "./types";
import { parseLevelToRows, getGameHeight, getGameWidth } from "./game";
import { render } from "./render";
import { movePlayer } from "./events";
const GAME_WIDTH = window.innerWidth;
const GAME_HEIGHT = window.innerHeight;

const rows = parseLevelToRows(levels[0]);
const height = getGameHeight(rows);
const width = getGameWidth(rows);
export const tileWidth = GAME_WIDTH / width;
export const tileHeight = GAME_HEIGHT / height;

export const gameData = rows.map((row, posY) => {
  return row.split("").map((r, posX) => {
    const type = Types.get(r);
    return type({ x: posX, y: posY, type: type.name });
  });
});

const c = document.createElement("canvas");
c.style.height = "100%";
c.style.width = "100%";
document.body.style.margin = "0";
document.body.appendChild(c);
const ctx = c.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
gameData.forEach(row => {
  row.forEach(col => {
    if (col.type === ".") {
      ctx.fillStyle = "blue";
    }
    if (col.type === "@") {
      ctx.fillStyle = "papayawhip";
    }
    if (col.type === "+") {
      ctx.fillStyle = "red";
    }
    if (col.type === "=") {
      ctx.fillStyle = "brown";
    }
    if (col.type === "#") {
      ctx.fillStyle = "black";
    }

    ctx.fillRect(
      col.pos[0] * tileWidth,
      col.pos[1] * tileHeight,
      tileWidth,
      tileHeight
    );
  });
});

// ctx.fillText("@", 10, 50);
function draw() {
  // gameData.forEach(row => {
  //   row.forEach(col => {
  //     render(col, tileWidth, tileHeight);
  //   });
  // });
  requestAnimationFrame(draw);
}
// requestAnimationFrame(draw);

movePlayer(gameData);
