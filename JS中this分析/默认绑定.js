// 1 默认绑定全局变量
function foo() {
    console.log(this.a);
}
var a = 2;
foo(); // 非严格模式下:2;       严格模式下：Cannot read property 'a' of undefined


