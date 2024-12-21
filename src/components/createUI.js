import { themeButton } from "./themeButton.js";

const root = document.querySelector("#root");

export const createUI = () => {
    const container = document.createElement("div");
    container.className = "calculator";
    const display = document.createElement("input");
    display.type = "text";
    display.className = "calculator-display";
    display.disabled = true;
    display.value = "0";
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "calculator-buttons";

    const buttons = [
        "C",
        "+/-",
        "%",
        "/",
        "1",
        "2",
        "3",
        "*",
        "4",
        "5",
        "6",
        "-",
        "7",
        "8",
        "9",
        "+",
        "0",
        ".",
        "=",
        "<",
    ];

    buttons.forEach((text) => {
        const button = document.createElement("button");
        button.className = "calculator-button";
        button.textContent = text;
        buttonContainer.appendChild(button);
    });

    const themeButtonn = themeButton(container);

    container.appendChild(display);
    container.appendChild(buttonContainer);
    container.appendChild(themeButtonn);
    root.appendChild(container);

    return { container, display };
};
