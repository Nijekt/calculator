export const calculate = (a, b, operator) => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    switch (operator) {
        case "+":
            return parseFloat((numA + numB).toFixed(2)).toString();
        case "-":
            return parseFloat((numA - numB).toFixed(2)).toString();
        case "*":
        case "×":
            return parseFloat((numA * numB).toFixed(2)).toString();
        case "/":
        case "÷":
            return parseFloat((numA / numB).toFixed(2)).toString();
        case "%":
            return parseFloat(((numA / 100) * numB).toFixed(2)).toString();
        default:
            return numB;
    }
};
