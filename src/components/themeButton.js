export const themeButton = (container) => {
    const getTheme = localStorage.getItem("theme");

    getTheme ? container.classList.add("dark-theme") : "";

    const themeButton = document.createElement("button");
    themeButton.className = "theme-toggle-button";
    themeButton.textContent = "Switch Theme";
    themeButton.addEventListener("click", () => {
        const theme = container.classList.toggle("dark-theme");

        if (theme) {
            localStorage.setItem("theme", theme);
        } else {
            localStorage.removeItem("theme");
        }
    });

    return themeButton;
};
