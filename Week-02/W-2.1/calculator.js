function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function doOperation(a, b, operation) {
    return operation(a, b);
}

const result1 = doOperation(5, 3, sum);
console.log(result1);