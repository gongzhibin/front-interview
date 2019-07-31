var length = 10;
function fn() {
    console.log(this.length);
}
var obj = {
    length: 5,
    method: function (fn) {
        fn();//10 隐含引用丢失
        arguments[0]();//2 隐含引用
    }
};

obj.method(fn, 1);