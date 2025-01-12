function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "lmao";
    }
    return x / y;
}

function total() {
    return total;
}

let num1 = null;
let operator = null;
let num2 = null;
let total = 0;

const operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
    "=": total
}

function operate(operator, num1, num2) {
    return operations[operator](num1, num2);
}



