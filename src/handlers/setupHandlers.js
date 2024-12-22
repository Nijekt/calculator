import { handleNumberInput } from "./numberHandler.js";
import { handleClear } from "./clearHandler.js";
import { handleEquals } from "./equalsHandler.js";
import { handleOperator } from "./operatorHandler.js";
import { handleBackspace } from "./backspaceHandler.js";
import { handleToggleSign } from "./toggleSignHandler.js";
import { handleNegativeInput } from "./negativeInputHandler.js";

export const setupHandlers = (container, display, state) => {
    container.querySelectorAll(".calculator-button").forEach((button) => {
        button.addEventListener("click", () => {
            const text = button.textContent;

            if (!isNaN(text) || text === ".") {
                handleNumberInput(text, state, display);
            } else if (text === "C") {
                handleClear(state, display);
            } else if (text === "=") {
                handleEquals(state, display);
            } else if (text === "+/-") {
                handleToggleSign(state, display);
            } else if (text === "⌫" || text === "<") {
                handleBackspace(state, display);
            } else if (text === "-") {
                handleNegativeInput(text, state, display);
            } else {
                handleOperator(text, state, display);
            }
        });
    });
};
