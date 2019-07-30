function person(name) {
    this.name = name;
}
person.prototype.sayName = function () {
    return this.name;
}

var son = new person('zxlg');
var sonName = son.sayName();
console.log(sonName);