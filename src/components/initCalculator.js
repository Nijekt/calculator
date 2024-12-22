import { createUI } from "./createUI.js";
import { setupHandlers } from "../handlers/setupHandlers.js";
import { initializeState } from "../state.js";
import { defButtons } from "../buttons.js";

export const initCalculator = (buttons = defButtons) => {
    const { container, display } = createUI(buttons);
    const state = initializeState();
    setupHandlers(container, display, state);
};
