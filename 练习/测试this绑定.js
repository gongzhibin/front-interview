var x = 3;
var foo = {
    x: 2,
    baz: {
        x: 1,
        bar: function () {
            return this.x;
        }
    }
}

var go = foo.baz.bar;
// var a = go();
// var b = foo.baz.bar();
console.log(go());
console.log(foo.baz.bar())