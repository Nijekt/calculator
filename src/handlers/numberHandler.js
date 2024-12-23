import { updateDisplay } from "../utils/updateDisplay.js";

export const handleNumberInput = (text, state, display) => {
    if (
        state.currVal.includes("Infinity") ||
        (text === "." && state.currVal.includes(".")) ||
        (state.currVal === "-" && text === ".")
    ) {
        return;
    }

    if (state.currVal === "-0" && text !== ".") {
        return;
    }

    if (state.currVal === "0" || state.clearNextInput) {
        if (text === ".") {
            state.currVal += text;
        } else {
            state.currVal = text;
            state.clearNextInput = false;
        }
    } else {
        state.currVal += text;
    }
    updateDisplay(display, state.currVal);
};
