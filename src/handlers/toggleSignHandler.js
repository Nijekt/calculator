import { updateDisplay } from "../utils/updateDisplay.js";

export const handleToggleSign = (state, display) => {
    if (state.currVal === "-") {
        state.currVal = "";
    }

    if (state.currVal !== "0") {
        state.currVal = (state.currVal * -1).toString();
        updateDisplay(display, state.currVal);
    }
};
