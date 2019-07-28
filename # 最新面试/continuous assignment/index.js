var fooValue = { name: 'foo' };
var barValue = { name: 'bar' };

Object.defineProperty(global, "foo", {
    get: function(){
        console.log("get foo");
        return fooValue;
    },
    set: function(newVal) {
        console.log("set foo");
        fooValue = newVal;
    }
});
Object.defineProperty(global, "bar", {
    get: function(){
      console.log("get bar");
      return barValue;
    },
    set: function(newVal) {
        console.log("set bar");
        barValue = newVal;
    }
});

var a = foo;
var b = a;
a.x = a = bar;
// 从右到左赋值，a.x中.等级比=高，仍保留对a的引用
// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/93#issuecomment-482389152/

console.log(a);
console.log(b);