function add(first = sencond, second) {
    return first + second;
}

console.log(add(1, 1));
console.log(add(undefined, 1));//参数二未定义，为临时死区