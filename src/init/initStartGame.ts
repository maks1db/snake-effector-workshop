import { guard, sample } from 'effector';

import { clearGameFx } from '../effects';
import { $apple, $isGameStarted, $snakeHead, reset } from '../model';
import { makeRandomPosition } from '../utils';

export const initStartGame = () => {
    const isNewGame = guard({
        clock: $isGameStarted,
        filter: (isNewGame) => isNewGame,
    });

    sample({
        clock: isNewGame,
        target: [clearGameFx, reset],
    });

    sample({
        clock: isNewGame,
        fn: makeRandomPosition,
        target: $snakeHead,
    });

    sample({
        clock: isNewGame,
        fn: makeRandomPosition,
        target: $apple,
    });
};