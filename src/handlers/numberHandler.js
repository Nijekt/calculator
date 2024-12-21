import { updateDisplay } from "../utils/updateDisplay.js";

export const handleNumberInput = (text, state, display) => {
    if (state.currVal === "0" || state.clearNextInput) {
        state.currVal = text;
        state.clearNextInput = false;
    } else {
        state.currVal += text;
    }
    updateDisplay(display, state.currVal);
};
