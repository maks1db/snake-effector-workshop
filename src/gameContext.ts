import { GAME_CELLS, CELL_PX } from "./constants";
import { canvas } from "./htmlElements";

const FIELD = GAME_CELLS * CELL_PX;

canvas.width = FIELD;
canvas.height = FIELD;
