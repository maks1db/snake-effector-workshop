import { createEffect } from "effector";
import { clearGameField, drawRect } from "./gameContext";
import {
    APPLE_COLOR,
    CELL_PX,
    START_GAME,
    SNAKE_COLOR,
    STOP_GAME,
} from "./constants";
import { button, score } from "./htmlElements";
import { PositionType } from "./types";

export const clearGameFx = createEffect(clearGameField);

/**
 * 1 отрисовывание яблока PositionType
 * 2. змейку Positionype[]
 * 3. модифицировать текст кнопки (булево)
 * 4. апдейтить количество очков (number)
 *
 */

export const drawAppleFx = createEffect((position: PositionType) => {
    drawRect(APPLE_COLOR, position);
});

export const drawSnakeFx = createEffect((cells: PositionType[]) => {
    cells.forEach((x) => drawRect(SNAKE_COLOR, x));
});

export const updateButtonTextFx = createEffect((gameIsStarted: boolean) => {
    button.innerText = gameIsStarted ? STOP_GAME : START_GAME;
});

export const updateGameScoreFx = createEffect((val: number) => {
    score.innerText = String(val);
});
