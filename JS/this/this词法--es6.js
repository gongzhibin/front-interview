function foo() {
    // 返回一个箭头函数
    return (a) => {
        // 这里的 `this` 是词法上从 `foo()` 采用的
        console.log( this.a );
    };
}
var obj1 = {
    a: 2
};
var obj2 = {
    a: 3
};
var bar = foo.call( obj1 );
bar.call( obj2 ); // 2, 不是3!
//一个箭头函数的词法绑定是不能被覆盖的（就连new也不行！）。