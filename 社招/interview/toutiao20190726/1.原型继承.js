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
// 缺陷：__proto__这个属性不应该被用户直接访问并修改
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


// 1.3 Object.create + constructor
function Dog() {
    Animal.apply(this, arguments); // apply super constructor.
    this.name = 'dog';
}

Dog.prototype = Object.create(Animal.prototype);
Object.defineProperty(Dog.prototype, 'constructor', {
    enumerable: false,
    value: Dog
});

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