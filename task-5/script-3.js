'use strict'

function getTimeExecution(func, ...args) {
    const t1 = performance.now();

    func(...args);

    const t2 = performance.now();

    console.log(`Execution time for function ${func.name} is ${t2 - t1} miliseconds`);
}

function someCalculations(a, b, c) {
    const result = a * b * c + (a+b+c);
    console.log(result);

    return result;
}

getTimeExecution(someCalculations, 100, 132, 123);
