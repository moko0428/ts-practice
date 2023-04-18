"use strict";
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = merge({ foo: 1 }, { bar: "hello" });
