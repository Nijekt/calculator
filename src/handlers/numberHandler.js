import { updateDisplay } from "../utils/updateDisplay.js";

export const handleNumberInput = (text, state, display) => {
    if (
        state.currVal.includes("Infinity") ||
        (text === "." && state.currVal.includes(".")) ||
        (state.currVal === "-" && text === ".") ||
        (state.currVal === "-0" && text !== ".")
    ) {
        return;
    }

    if (state.clearNextInput) {
        state.currVal = text === "." ? "0." : text;
        state.clearNextInput = false;
    } else {
        if (state.currVal === "0" && text !== ".") {
            state.currVal = text;
        } else {
            state.currVal += text;
        }
    }
    updateDisplay(display, state.currVal);
};
