function parent() {
    this.age = 50;
}
parent.prototype.getParentAge = function () {
    return this.age;
};

function son() {
    this.age = 25;
}

// son.prototype = new parent();
// 原型继承继承父类，不应包含其私有属性
son.prototype = Object.create(parent.prototype);
son.prototype.getSonAge = function () {
    return this.age;
};

let instance = new son();
let sonAge = son.getSonAge();
console.log(sonAge);