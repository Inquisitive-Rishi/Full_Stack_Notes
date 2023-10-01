function getThis() {
    'use strict'
    return this;
}

const one = getThis.bind(1);

console.log(one());
console.log(one.call(2));
console.log(one.apply(4));
console.log(one.bind(3)());
console.log(new one());


