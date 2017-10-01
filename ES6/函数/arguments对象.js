function add(num1, num2 = 10) {
    // 'use strict';
    console.log(num1 === arguments[0]);
    console.log(num2 === arguments[1]);
    num1 = 3;
    num2 = 4;
    console.log(num1 === arguments[0]);
    console.log(num2 === arguments[1]);
}

add(1);