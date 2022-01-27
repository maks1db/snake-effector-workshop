import { GAME_CELLS, CELL_PX } from "./constants";
import { canvas } from "./htmlElements";
import { PositionType } from "./types";

const FIELD = GAME_CELLS * CELL_PX;

canvas.width = FIELD;
canvas.height = FIELD;

const context = canvas.getContext("2d");

export const drawRect = (color: string, position: PositionType) => {
    context.fillStyle = color;

    context.fillRect(position.x * CELL_PX, position.y * CELL_PX, CELL_PX - 1, CELL_PX - 1);
};

export const clearGameField = () => context.clearRect(0, 0, FIELD, FIELD);

// export const drawApple = (position: PositionType) => {
//     clearGameField();
//     context.arc(position.x, position.y, 10, 0, 2 * Math.PI, false);
// }
