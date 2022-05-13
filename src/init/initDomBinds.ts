import { createEffect, forward, sample } from "effector";
import { GAME_SPEED } from "../constants";
import { tick, toggleGameEvent, $isGameStarted, $gameScore } from "../model";
import { button } from "../htmlElements";
import { updateButtonTextFx, updateGameScoreFx } from "../effects";

let frames = 0;
const runGame = () => {
    if (frames >= 0) {
        requestAnimationFrame(runGame);
    }

    frames += 1;
    if (frames < GAME_SPEED) {
        return;
    }

    frames = 0;
    tick();
};

const toggleGameStateFx = createEffect((isGameStarted: boolean) => {
    if (!isGameStarted) {
        frames = -1;
    } else {
        frames = 0;
        runGame();
    }
});

export const initDomBinds = () => {
    button.addEventListener("click", toggleGameEvent);

    sample({
        clock: $isGameStarted,
        target: [toggleGameStateFx, updateButtonTextFx],
    });

    sample({
        clock: $gameScore,
        target: updateGameScoreFx,
    });
};
