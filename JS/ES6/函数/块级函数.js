'use strict';
// es5严格模式下这样定义会出错
if (true) {
    console.log(typeof foo);//function
    function foo() {

    }
}
console.log(typeof foo);//严格模式下为undefined,非严格模式下也为function