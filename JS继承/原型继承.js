function parent() {
    this.age = 50;
}
parent.prototype.getParentAge = function () {
    return this.age;
}

function son() {
    this.age = 25;
}
son.prototype = new parent();
son.prototype.getSonAge = function(){
    return this.age;
}

let instance = new son();
let sonAge = son.getSonAge();
console.log(sonAge);