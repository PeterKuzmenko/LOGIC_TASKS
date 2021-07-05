'use strict'

function factorial(x) {
    if (x > 1) {
        return x * factorial(x-1);
    } else {
        return x
    }
}
