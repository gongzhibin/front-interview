function parent(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

parent.prototype.sayName = function () {
    console.log(this.name);
};

function son(name, age) {
    parent.call(this, name);
    this.age = age;
}
// son.prototype = new parent();
son.prototype = Object.create(parent.prototype);
son.prototype.constructor = son;
son.prototype.sayAge = function () {
    console.log(this.age);
};

var instance1 = new son('zxlg', 24);
instance1.colors.push('black');
console.log(instance1.colors);
console.log(instance1.sayName());
console.log(instance1.sayAge());

var instance2 = new son('lili', 23);
var instance2_colors = instance2.colors;
var instance2_name = instance2.sayName();
var instance2_age = instance2.sayAge();
console.log(instance2_colors);
console.log(instance2_name);
console.log(instance2_age);
