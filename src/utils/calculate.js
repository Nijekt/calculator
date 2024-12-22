export const calculate = (a, b, operator) => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    switch (operator) {
        case "+":
            return numA + numB;
        case "-":
            return numA - numB;
        case "*" || "×":
            return numA * numB;
        case "×":
            return numA * numB;
        case "/" || "÷":
            return numB !== 0 ? numA / numB : "Error";
        case "÷":
            return numB !== 0 ? numA / numB : "Error";
        case "%":
            return (numA / 100) * numB;
        default:
            return numB;
    }
};
