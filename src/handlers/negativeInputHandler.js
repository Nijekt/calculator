import { handleOperator } from "./operatorHandler.js";

export const handleNegativeInput = (text, state, display) => {
    if (state.clearNextInput) {
        state.currVal = "-";
        state.clearNextInput = false;
        updateDisplay(display, state.currVal);
    } else {
        handleOperator(text, state, display);
    }
};
