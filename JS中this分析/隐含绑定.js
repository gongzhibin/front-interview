// 2 obj 对象在函数被调用的时间点上“拥有”或“包含”这个 函数引用
var obj = {
    a: 2,
    foo: foo
};

obj.foo(); // 2

// 3 对象属性引用链的最后一层是影响调用点的
var obj2 = {
    a: 42,
    foo: foo
};

var obj1 = {
    a: 2,
    obj2: obj2
};
obj1.obj2.foo(); // 42