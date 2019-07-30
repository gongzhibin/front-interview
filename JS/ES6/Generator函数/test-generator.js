function* generaotr() {
    yield 'hello';
    yield 'world';
    return 'ending';
}
// var test_generaotr = generaotr();
// var h = test_generaotr.next();
// var w = test_generaotr.next();
// var r = test_generaotr.next();

function* generaotr1() {
    for (var i = 0; true; i++) {
        var reset = yield i;
        if (reset) {
            i = -1;
        }
    }

}
// var test_generaotr1 = generaotr1();
// var t1 = test_generaotr1.next();
// var t2 = test_generaotr1.next();
// var t3 = test_generaotr1.next(true);


function* generaotr2(x) {
    var a = 1 + (yield (x + 2));
    var b = yield (a + 1);
    return a + b;
}

// var test_generaotr1 = generaotr2(5);
// var t1 = test_generaotr1.next();
// var t2 = test_generaotr1.next(5);
// var t3 = test_generaotr1.next(6);

function* generaotr3() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}
for(let value of generaotr3()){
    console.log(value);
}


var end = 'end';