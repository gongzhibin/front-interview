function foo() {
    console.log(this.a);
}

function doFoo(fn) {
    // `fn` 只不过 `foo` 的另一个引用

    fn(); // <-- 调用点!
}

var obj = {
    a: 2,
    foo: foo
};

var a = "oops, global"; // `a` 也是一个全局对象的属性

doFoo(obj.foo); // "oops, global"
//参数传递仅仅是一种隐含的赋值，而且因为我们在传递一个函数，它是一个隐含的引用赋值，所以最终结果和我们前一个代码段一样。