// 4 隐含丢失
function foo() {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo
};

var bar = obj.foo; // 函数引用！

var a = 'oops, global'; // `a` 也是一个全局对象的属性

bar(); // "oops, global"