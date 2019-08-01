// 'use strict';
var obj = {
    'a': 1,
    'b': 2,
    'c': 3
};
Object.prototype.age = 24;
Object.defineProperty(obj, 'school', {
    configurable: true,
    writable: true,
    //枚举的属性为enumerable
    enumerable: true,
    value: 'whut'
});
// var a = Object.keys(obj);
for (var index in obj) {
    if (obj.hasOwnProperty(index)) {
        console.log(obj[index]);
    }
}
// for (var value of obj) {
//     console.log(value);
// }