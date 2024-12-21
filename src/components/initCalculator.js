import { createUI } from "./createUI.js";
import { setupHandlers } from "../handlers/setupHandlers.js";
import { initializeState } from "../state.js";

export const initCalculator = () => {
    const { container, display } = createUI();
    const state = initializeState();
    setupHandlers(container, display, state);
};
