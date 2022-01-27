import { $snakeDirection } from "../model";
import { createEvent, sample } from "effector";
import { PositionType } from "../types";

const makeDirection = (keyCode: number, direction: PositionType) => ({
    keyCode,
    direction,
});

const keyDown = createEvent<number>();
window.addEventListener("keydown", (e) => keyDown(e.keyCode));

const directions = [
    makeDirection(37, { x: -1, y: 0 }), // left
    makeDirection(38, { x: 0, y: -1 }), // down
    makeDirection(39, { x: 1, y: 0 }), // right
    makeDirection(40, { x: 0, y: 1 }), // up
];

const getDirectionWhenKeyDownArrows = (
    currentDirection: PositionType,
    eventCode: number
) => {
    const item = directions.find((x) => x.keyCode === eventCode);
    if (!item) {
        return undefined;
    }

    const { direction } = item;
    if (
        -direction.x !== currentDirection.x &&
        -direction.y !== currentDirection.y
    ) {
        return direction;
    }
};

export const initKeyDown = () => {
    sample({
        clock: keyDown,
        source: $snakeDirection,
        fn: getDirectionWhenKeyDownArrows,
        target: $snakeDirection,
    });
};
