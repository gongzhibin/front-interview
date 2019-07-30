// 1. 原型继承
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
// https://www.liaoxuefeng.com/wiki/1022910821149312/1023021997355072
// http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html
function Animal() {
    this.name = 'animal';
}

Animal.prototype.eat = function(){
  return 'can eat';
}

function Dog() {
    this.name = 'dog';
};

// function Dog() {
//     Animal.apply(this, arguments); // apply super constructor.
//     this.name = 'dog';
// }


// 1.1 new + constructor
// 缺陷: 这种方式会将Animal实例中的属性添加到Dog的原型上
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
// 缺陷:1.__proto__这个属性不应该被用户直接访问并修改；2.如果你在生产环境中使用这个方法，那么快速运行 Javascript 就是不可能的，因为许多浏览器优化了原型，尝试在调用实例之前猜测方法在内存中的位置，但是动态设置原型干扰了所有的优化，甚至可以强制一些浏览器重新编译来反优化您的代码，以使其根据规范工作；3.不支持 IE10 及以下的浏览器版本。
Dog.prototype.__proto__ = Animal.prototype;

const yellowDog = new Dog();
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


// 1.3 Object.setPrototypeOf + constructor
// 缺陷：这个方式表现并不好，应该被弃用（跟__proto__类似）。1.如果你在生产环境中使用这个方法，那么快速运行 Javascript 就是不可能的，因为许多浏览器优化了原型，尝试在调用实例之前猜测方法在内存中的位置，但是动态设置原型干扰了所有的优化，甚至可以强制一些浏览器重新编译来反优化您的代码，以使其根据规范工作。2.不支持 IE8 及以下的浏览器版本。

// Object.setPrototypeOf()方法设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或null。由于现代JavaScript引擎优化属性访问所带来的特性的关系，更改对象的[[Prototype]]在各个浏览器和 JavaScript 引擎上都是一个很慢的操作。其在更改继承的性能上的影响是微妙而又广泛的，这不仅仅限于obj.__proto__ = ... 语句上的时间花费，而且可能会延伸到任何代码，那些可以访问任何[[Prototype]]已被更改的对象的代码。如果你关心性能，你应该避免设置一个对象的[[Prototype]]。相反，你应该使用Object.create()来创建带有你想要的[[Prototype]]的新对象。

Dog.prototype = Object.setPrototypeOf({}, Animal.prototype);
Object.defineProperty(Dog.prototype, 'constructor', {
    enumerable: false,
    value: Dog
});


// 1.4 Object.create + constructor
// 缺陷：1. 不支持 IE8 以下的版本; 2.这个慢对象初始化在使用第二个参数的时候有可能成为一个性能黑洞，因为每个对象的描述符属性都有自己的描述对象。当以对象的格式处理成百上千的对象描述的时候，可能会造成严重的性能问题。

Dog.prototype = Object.create(Animal.prototype);
Object.defineProperty(Dog.prototype, 'constructor', {
    enumerable: false,
    value: Dog
});


// 1.5 中介 + new + constructor
function F() {}
F.prototype = Animal.prototype;
Dog.prototype = new Animal();
Object.defineProperty(Dog.prototype, 'constructor', {
    enumerable: false,
    value: Dog
});

// 封装函数
function extend(Child, Parent) {
    var F = function() {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Object.defineProperty(Child.prototype, 'constructor', {
        enumerable: false,
        value: Child
    });
}

// 实例的原型指向构造函数的原型对象
new Dog().__proto__ === Dog.prototype;


// 1.6. class extends
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