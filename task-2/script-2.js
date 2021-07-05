'use strict'

function sumOfSequence(x) {
    if (x > 1) {
        return x + sumOfSequence(x-1);
    } else {
        return x
    }
}
