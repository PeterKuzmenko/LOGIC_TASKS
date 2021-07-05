'use strict'

function sumOfSequence(x) {
    if (x > 1) {
        return x + sumOfNums(x-1);
    } else {
        return x
    }
}
