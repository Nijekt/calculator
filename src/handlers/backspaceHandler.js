import { updateDisplay } from "../utils/updateDisplay.js";

export const handleBackspace = (state, display) => {
    if (state.currVal.includes("Infinity")) {
        state.currVal = "0";
    }

    if (state.currVal.length > 1) {
        state.currVal = state.currVal.slice(0, -1);
    } else {
        state.currVal = "0";
    }

    updateDisplay(display, state.currVal);
};
