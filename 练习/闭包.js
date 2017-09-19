function testClosure(){
    var a = 1;
    return function(){
        return a;
    }
}
var a = testClosure();