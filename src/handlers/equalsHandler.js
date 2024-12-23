import { calculate } from "../utils/calculate.js";
import { updateDisplay } from "../utils/updateDisplay.js";

export const handleEquals = (state, display) => {
    if (state.prevVal !== null && state.operator !== null) {
        state.currVal = calculate(state.prevVal, state.currVal, state.operator);
        state.prevVal = null;
        state.operator = null;
    }
    state.clearNextInput = false;

    updateDisplay(display, state.currVal);
};
