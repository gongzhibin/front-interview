// https://juejin.im/post/5c0224c1f265da611d666514

const obj = {};
const arr = [1, 2, 3];
const num = 1;

// 1. typeof
console.log(typeof obj, typeof arr); // typeof 无法区分数组和对象
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(null == undefined); // true

// 2.instanceof
// instanceof的作用：会检查右边构造函数的原型对象（prototype），是否在左边对象的原型链上。因此，下面两种写法是等价的。
console.log(arr instanceof Object); // true
console.log(Object.prototype.isPrototypeOf(arr)); // true
console.log(obj instanceof Array); // false
// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。 
console.log(Object.create(null) instanceof Object); // instanceof运算符只能用于对象（纯对象和数组），不适用原始类型（Undefined、Null、Boolean、Number 和 String）的值
console.log(undefined instanceof Object) // false
console.log(null instanceof Object) // false
// 利用instanceof运算符，可以巧妙地解决，调用构造函数时未加new命令的问题。

// 3. Object.prototype.toString.call(X);
console.log(Object.prototype.toString.call(obj)); // [object Object]
console.log(Object.prototype.toString.call(arr)); // [object Array]
// 作为继承的数组arr重写了toString方法，并不是Object.prototype中的toString方法
console.log(Array.prototype.toString.call(arr)); // 1, 2, 3

console.log(Object.prototype.toString.call(123)) //[object Number]
console.log(Object.prototype.toString.call('123')) //[object String]
console.log(Object.prototype.toString.call(undefined)) //[object Undefined]
console.log(Object.prototype.toString.call(true)) //[object Boolean]
console.log(Object.prototype.toString.call({})) //[object Object]
console.log(Object.prototype.toString.call([])) //[object Array]
console.log(Object.prototype.toString.call(function(){})) //[object Function]