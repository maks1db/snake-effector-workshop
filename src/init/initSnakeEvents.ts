import { guard, sample } from "effector";
import { F, take } from "ramda";

import { GAME_CELLS } from "../constants";
import { isEq, makeRandomPosition } from "../utils";
import {
    $apple,
    $isGameStarted,
    $snakeCells,
    $snakeHead,
    $snakeLength,
    addOneItem,
} from "../model";

export const initSnakeEvents = () => {
    sample({
        clock: $snakeHead,
        source: [$snakeCells, $snakeLength],
        fn: ([cells, length], cell) => take(length, [cell, ...cells]),
        target: $snakeCells,
    });

    const isSnakeEatApple = guard({
        clock: $snakeCells,
        source: $apple,
        filter: (apple, cells) => cells.some((x) => isEq(x, apple)),
    });

    const isSnakeKickSelf = guard({
        clock: $snakeHead,
        source: $snakeCells,
        filter: ([, ...cellsWithoutHead], head) =>
            cellsWithoutHead.some((x) => isEq(head, x)),
    });

    const isSnakeKickWall = guard({
        clock: $snakeHead,
        filter: (head) =>
            [head.x, head.y].some((val) => val <= -1 || val >= GAME_CELLS),
    });

    sample({
        clock: isSnakeEatApple,
        fn: makeRandomPosition,
        target: [$apple, addOneItem],
    });

    sample({
        clock: [isSnakeKickSelf, isSnakeKickWall],
        fn: F,
        target: $isGameStarted,
    });
};
