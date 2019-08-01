function foo() {
    console.log( this.a );
}

var obj = {
    a: 2
};

foo.call( obj ); // 2
// 通过 foo.call(..) 使用 明确绑定 来调用 foo，允许我们强制函数的 this 指向 obj。