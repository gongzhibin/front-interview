// 2. vue的缺陷
// data() {
//     return {a: [1, 2, 3]}
// }

// this.a[0] = 2;

// 2.1. 不能直接在对象添加或者删除属性，因为vue是在初始化时执行响应式的
// 2.2. 其实除了数组的新增或删除，以及length(这个属性的configurable为false，所以无法重新定义)的变动，这几个由于JS本身的限制无法监听
//      其他的是能被检测到的，只是vue没有这样做。
//      另外我们对数组多半是遍历, 劫持索引的get, 性能问题，性能代价和获取用户体验不成正比(由大github回复过了)
// 2.3 vue.set()这个方法做的事，其实就是帮你做一次Object.defineProperty
//     Vue劫持了数组可以改变原数组的api，使得每次调用都会执行dep.notify()方法进而去更新视图。
// 2.4 使用 defineProperty 只能重定义<属性>的读取（get）和设置（set）行为
//     Object.defineProperty只能监听属性，而Proxy能监听整个对象，对非对象或数组类型的劫持，也能做到监听。
//     到了 ES6，提供了Proxy，可以重定义更多的行为，一共13种，比如has（属性in对象）、deleteProperty (删除属性delete)、apply(函数调用)更多行为。

let target = { a : 1, b : 2 };
let proxy = new Proxy(target, {
    set(target, key, value, receiver){
        console.log('检测到了target中set的key为 -> ' + key);
        return Reflect.set(target, key, value, receiver);
    },
    deleteProperty(target, key, value, receiver) {
        console.log('检测到了target中delete的key为 -> ' + key);
        return Reflect.deleteProperty(target, key, value, receiver);
    }
});

proxy.a = '1'; // 检测到了target中set的key为 -> a
proxy.d = '4'; // 检测到了target中set的key为 -> d
delete proxy.b; // 检测到了target中delete的key为 -> b
console.log('target', target);


let targetArr = [1, 2, 3];
let proxyArr = new Proxy(targetArr, {
    set(targetArr, key, value, receiver){
        console.log('检测到了targetArr中set的key为 -> ' + key);
        return Reflect.set(targetArr, key, value, receiver);
    }
});

proxyArr[0] = 11; // 检测到了targetArr中set的key为 -> 0
proxyArr.push(4); // 检测到了targetArr中set的key为 -> 3; 检测到了targetArr中set的key为 -> length
proxyArr.pop(); // 检测到了targetArr中set的key为 -> length
proxyArr.length = 10; // 检测到了targetArr中set的key为 -> length
console.log('targetArr', targetArr);
