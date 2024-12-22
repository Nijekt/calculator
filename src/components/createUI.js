import { themeButton } from "./themeButton.js";

const root = document.querySelector("#root");

export const createUI = (buttons) => {
    const container = document.createElement("div");
    container.className = "calculator";
    const display = document.createElement("input");
    display.type = "text";
    display.className = "calculator-display";
    display.disabled = true;
    display.value = "0";
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "calculator-buttons";

    const operators = ["+", "-", "/", "*", "=", "×", "÷"];
    const specialButtons = ["+/-", "%", "C", "⌫", "<"];

    buttons.forEach((text) => {
        const button = document.createElement("button");
        button.className = "calculator-button";
        button.textContent = text;

        if (operators.includes(text)) {
            button.classList.add("operator");
        } else if (specialButtons.includes(text)) {
            button.classList.add("spec-button");
        }

        buttonContainer.appendChild(button);
    });

    const themeButtonn = themeButton(container);

    container.appendChild(display);
    container.appendChild(buttonContainer);
    container.appendChild(themeButtonn);
    root.appendChild(container);

    return { container, display };
};
