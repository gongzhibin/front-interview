function add(a, b) {
    return a + b;
}

function curry(fn, param = []) {
    return fn.length === param.length
        ? fn.apply(null, param)
        : (...args) => curry(fn, [...param, ...args]);
}

const curryAdd = curry(add);
console.log(curryAdd(1)(2)); 