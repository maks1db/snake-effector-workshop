import { sample } from 'effector';

import { clearGameFx, drawAppleFx, drawSnakeFx } from '../effects';
import { $apple, $snakeCells, $snakeDirection, $snakeHead, tick } from '../model';

export const initDrawGame = () => {
    sample({
        clock: tick,
        target: clearGameFx,
    });

    sample({
        clock: tick,
        source: $snakeCells,
        target: drawSnakeFx,
    });

    sample({
        clock: tick,
        source: $apple,
        target: drawAppleFx,
    });

    sample({
        clock: tick,
        source: [$snakeHead, $snakeDirection],
        fn: ([head, direction]) => ({
            x: head.x + direction.x,
            y: head.y + direction.y,
        }),
        target: $snakeHead,
    });
};
