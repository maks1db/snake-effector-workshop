import { createDomain, createStore, createEvent } from "effector";
import { PositionType } from './types';
import { SNAKE_DEFAULT_CELLS } from './constants'

export const appDomain = createDomain();

export const reset = appDomain.createEvent();
export const tick = appDomain.createEvent();

appDomain.onCreateStore((store) => {
    store.reset(reset);
});

export const toggleGameEvent = createEvent<any>();
export const $isGameStarted = createStore(false).on(
    toggleGameEvent,
    (state) => !state
);

export const $apple = appDomain.createStore<PositionType>({ x: 0, y: 0 });

export const $snakeHead = appDomain.createStore < PositionType>({ x: -1, y: -1});
export const $snakeDirection = appDomain.createStore<PositionType>({
    x: 1,
    y: 0,
});
export const $snakeCells = appDomain.createStore<PositionType[]>([]);

export const addOneItem = createEvent();

export const $snakeLength = appDomain
    .createStore(SNAKE_DEFAULT_CELLS)
    .on(addOneItem, (state) => state + 1);

export const $gameScore = appDomain.createStore(0).on(addOneItem, state => state + 1);