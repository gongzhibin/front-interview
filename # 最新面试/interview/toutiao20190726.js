// 1. 原型继承
function Animal() {
    this.name = 'animal';
}

Animal.prototype.eat = function(){
  return 'can eat';
}

function Dog() {
    this.name = 'dog';
};

// 1.1 new + constructor
Dog.prototype = new Animal();

const blackDog = new Dog();
console.log(blackDog.constructor === Dog); // false
console.log(blackDog.constructor === Animal); // true

//修正Dog.prototype被覆盖之后的Dog.prototype.constructor
Object.defineProperty(Dog.prototype, 'constructor', {
    enumerable: false,
    value: Dog
});

console.log(blackDog.name);
console.log(blackDog.eat());

// 1.2. __proto__
Dog.prototype.__proto__ = Animal.prototype;

const yellowDog = new Dog();
yellowDog.eat();
// yellowDog: {
//     1. eat?
//     2. __proto__ --> Dog.prototype: {
//         3. eat ?
//         4. __proto__ --> Animal.prototype: {
//             5. eat ?
//         }
//     }
// }

console.log(yellowDog.name);
console.log(yellowDog.eat());
console.log(yellowDog instanceof Dog);
console.log(yellowDog instanceof Animal);

// 实例的原型指向构造函数的原型对象
new Dog().__proto__ === Dog.prototype;


// 1.3. class extends
class Person {
    constructor() {
        this.name = 'person';
    }

    say() {
        return 'person can say';
    }
}

class Asian extends Person {
    constructor() {
        this.name = 'asian';
    }
}

console.log(Asian.__proto__ === Person.prototype);
console.log(Object.prototype.__proto__); // 顶端


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
//     Object.defineProperty只能监听属性，而Proxy能监听整个对象，省去对非对象或数组类型的劫持，也能做到监听。
//     到了 ES6，提供了 Proxy，可以重定义更多的行为，一共13种，比如has（属性in对象）、deleteProperty (删除属性delete)、apply(函数调用)更多行为。

let target = { a : 1, b : 2 };
let proxy = new Proxy(target, {
    set(target, key, value, receiver){
        console.log('检测到了target的set的key为 -> ' + key);
        return Reflect.set(target, key, value, receiver);
    },
    deleteProperty(target, key, value, receiver) {
        console.log('检测到了target的delete的key为 -> ' + key);
        return Reflect.deleteProperty(target, key, value, receiver);
    }
});

proxy.a = '1'; // 检测到了set的key为 -> a
proxy.d = '4'; // 检测到了set的key为 -> d
delete proxy.b; // 检测到了删除的key为 -> b
console.log('target', target);


let targetArr = [1, 2, 3];
let proxyArr = new Proxy(targetArr, {
    set(targetArr, key, value, receiver){
        console.log('检测到了targetArr的set的key为 -> ' + key);
        return Reflect.set(targetArr, key, value, receiver);
    }
});

proxyArr[0] = 11;
proxyArr.push(4);
proxyArr.pop();
proxyArr.length = 10;
console.log('targetArr', targetArr);

// 3.请实现如下的函数，可以批量请求数据，所有的 URL 地址在 urls 参数中
// 同时可以通过 max 参数控制请求的并发度
// 当所有请求结束之后，需要执行 callback 回调函数。
// 发请求的函数可以直接使用 fetch 即可

function sendRequest(urls, max, callback) {
    const urlsLen = urls.length;
    let completeUrls = 0;

    for(let i = 0; i < max; i++) {
        fetchOne();
    }

    function fetchOne() {
        if (urls.length === 0) {
            if(completeUrls === urlsLen) {
                callback();
            }
            return;
        }

        const url = urls.shift();
        fetch(url).then(() => {
            completeUrls++;
            fetchOne();
        });
    }
}

// 4. 间隔时间执行函数
// new Queue() 
//     .task(1000, () => { 
//         console.log(1) 
//     })
//     .task(2000, () => { 
//         console.log(2) 
//     })
//     .task(1000, () => { 
//         console.log(3) 
//     })
//     .start() 
class Queue {
    constructor() {
        this.tasks = [];
    }

    task(time, fn) {
        this.tasks.push({ time, fn });
    }

    async start() {
        const { time, fn } = this.tasks.pop();
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                fn();
                resolve();
            }, time);
        });
        return this;
    }
};
