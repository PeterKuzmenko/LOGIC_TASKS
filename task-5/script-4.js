'use strict'

async function getTimeExecutionAsync(func, ...args) {
    const t1 = performance.now();

    await func(...args);

    const t2 = performance.now();

    console.log(`Execution time for function ${func.name} is ${t2 - t1} miliseconds`);
}

function wait() {
    return new Promise(function(resolve, reject) {
      setTimeout(() => resolve(1), 3000);
    })
}

getTimeExecutionAsync(wait);
