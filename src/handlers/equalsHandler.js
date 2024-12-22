import { calculate } from "../utils/calculate.js";
import { updateDisplay } from "../utils/updateDisplay.js";

export const handleEquals = (state, display) => {
    if (state.prevVal !== null && state.operator !== null) {
        state.currVal = parseFloat(
            calculate(state.prevVal, state.currVal, state.operator).toFixed(2),
        ).toString();
        state.prevVal = null;
        state.operator = null;
    }
    state.clearNextInput = false;

    updateDisplay(display, state.currVal);
};
