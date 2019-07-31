function testClosure(){
    var a = 1;
    return function(){
        return a;
    }
}
var func = testClosure();
var a = func();
console.log(a);

//解除对匿名函数的引用，以便释放内存
func = null;