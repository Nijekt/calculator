import { handleOperator } from "./operatorHandler.js";
import { updateDisplay } from "../utils/updateDisplay.js";

export const handleNegativeInput = (text, state, display) => {
    if (state.currVal.includes("Infinity") || state.currVal === "-") {
        return;
    }

    if (state.clearNextInput) {
        if (state.currVal === "0") {
            return;
        }
        state.currVal = "-";
        state.clearNextInput = false;
        updateDisplay(display, state.currVal);
    } else {
        handleOperator(text, state, display);
    }
};
