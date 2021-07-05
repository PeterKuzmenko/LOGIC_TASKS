'use strict'

function auxiliaryFunc() {
    let result = '';

    return (str) => {
        if (str) {
            result += str;
        } else {
            return result;
        }
    }
}

const concat = auxiliaryFunc();
