import { GAME_CELLS } from "./constants";
import randomInt from "random-int";
import { PositionType } from "./types";

const makeRandomNumber = () => randomInt(0, GAME_CELLS - 1);

export const makeRandomPosition = (): PositionType => ({
    x: makeRandomNumber(),
    y: makeRandomNumber(),
});

export const isEq = (a: PositionType, b: PositionType) =>
    a.x === b.x && a.y === b.y;
