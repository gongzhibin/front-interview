function foo(num) {
    console.log('foo: ' + num);
    // 追踪 `foo` 被调用了多少次
    this.count++;
    data.count++;
}

foo.count = 0;
var data = {
    count: 0
};

var i;

for (i = 0; i < 10; i++) {
    if (i > 5) {
        foo(i);
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// `foo` 被调用了多少次？
console.log(foo.count); // 0 -- 这tm是怎么回事……？
console.log(count); // NaN
console.log(data.count); // 4