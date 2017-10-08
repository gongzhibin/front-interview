function Person(name) {
    if (this instanceof Person) {
        this.name = name;
    } else {
        throw new Error('必须通过new关键字调用')
    }
}

var person = new Person('zxlg');
// var notAPerson = Person();//抛出错误

//不依赖new关键字也可以将this绑定到新实例上
var otherPerson = Person.call(person, 'lili');
console.log(otherPerson);