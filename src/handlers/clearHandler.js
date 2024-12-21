import { updateDisplay } from "../utils/updateDisplay.js";

export const handleClear = (state, display) => {
    state.currVal = "0";
    state.prevVal = null;
    state.operator = null;
    state.clearNextInput = false;
    updateDisplay(display, state.currVal);
};
