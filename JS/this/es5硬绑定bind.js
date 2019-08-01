// 由于 硬绑定 是一个如此常用的模式
//它已作为 ES5 的内建工具提供：Function.prototype.bind
function foo(something) {
    console.log( this.a, something );
    return this.a + something;
}

var obj = {
    a: 2
};

var bar = foo.bind( obj );

var b = bar( 3 ); // 2 3
console.log( b ); // 5

// bind(..) 返回一个硬编码的新函数，它使用你指定的 this 环境来调用原本的函数。

// 注意： 在 ES6 中，bind(..) 生成的硬绑定函数有一个名为 .name 的属性，
// 它源自于原始的 目标函数（target function）。
// 举例来说：bar = foo.bind(..) 应该会有一个 bar.name 属性，
// 它的值为 "bound foo"，这个值应当会显示在调用栈轨迹的函数调用名称中。