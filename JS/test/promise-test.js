var a = 5;
var add = function (num) {
    return num++;
};
var b = add(a);
console.log(b);

var myFirstPromise = new Promise(function (resolve, reject) {
    //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
    //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
    setTimeout(function () {
        resolve('成功!'); //代码正常执行！
    }, 250);
});

myFirstPromise.then(function (successMessage) {
    //successMessage的值是上面调用resolve(...)方法传入的值.
    //successMessage参数不一定非要是字符串类型，这里只是举个例子
    console.log('Yay! ' + successMessage);
});

//generator 测试
function* generator(x) {
    var y = yield x + 1;
    return y;
}
//异步
var g = generator(1);
console.log(g.next());
console.log(g.next());

// //同步方式1
// Promise.all([myFirstPromise]).then(function () {
//     var g = generator(1);
//     console.log(g.next());
//     console.log(g.next());
// });

// //同步方式2
// myFirstPromise.then(function () {
//     var g = generator(1);
//     console.log(g.next());
//     console.log(g.next());
// });
