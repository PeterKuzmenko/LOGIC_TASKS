'use strict'

function calc() {
    return this.a + this.b;
}

const obj = {
    a: 1,
    b: 1
}

calc.call(obj);