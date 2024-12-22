import { calculate } from "../utils/calculate.js";
import { updateDisplay } from "../utils/updateDisplay.js";

export const handleOperator = (text, state, display) => {
    if (state.clearNextInput) {
        state.operator = text;
    } else {
        if (state.prevVal === null) {
            state.prevVal = state.currVal;
        } else if (state.operator !== null) {
            state.prevVal = calculate(state.prevVal, state.currVal, state.operator);
        }
    }

    state.operator = text;
    state.clearNextInput = true;
    updateDisplay(display, state.prevVal);
};
