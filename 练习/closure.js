/**
 * Created by zxlg on 2017/4/14.
 */

//闭包
function count() {
    var arr = [];
    for (var i = 1; i <= 3; i++) {
        arr.push(function () {
            return i * i;//返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量。
        });
    }
    return arr;
}
function count1() {
    var arr = [];
    for (var i = 1; i <= 3; i++) {
        //“创建一个匿名函数并立刻执行”
        // 理论上讲，创建一个匿名函数并立刻执行可以这么写：
        // function (x) { return x * x } (3);
        // 但是由于JavaScript语法解析的问题，会报SyntaxError错误，
        // 因此需要用括号把整个函数定义括起来：
        //(function (x) { return x * x }) (3);
        arr.push((function (n) {
            return function () {
                return n * n;
            }
        })(i));
    }
    return arr;
}
var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
console.log(f1(), f2(), f3());

var results1 = count1();
var f11 = results1[0];
var f22 = results1[1];
var f33 = results1[2];
console.log(f11(), f22(), f33());

