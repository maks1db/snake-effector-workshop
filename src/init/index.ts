import { initDomBinds } from "./initDomBinds";
import { initDrawGame } from "./initDrawGame";
import { initStartGame } from "./initStartGame";
import { initSnakeEvents } from "./initSnakeEvents";
import { initKeyDown } from "./initKeyDown";

export const init = () => {
    initDomBinds();
    initDrawGame();
    initStartGame();
    initSnakeEvents();
    initKeyDown();
};
