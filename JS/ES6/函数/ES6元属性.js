function Person(name) {
    if (typeof new.target !== 'undefined') {
        this.name = name;
    } else {
        throw new Error('必须通过new关键字调用Person');
    }
}

var person = new Person('zxlg');
// var notAPerson = Person();//抛出错误

//也会抛出错误
//可以清除注释查看
// var otherPerson = Person.call(person, 'lili');
// console.log(otherPerson);

function AnotherPerson(name) {
    Person.call(this, name);
}

let person1 = new Person('zxlg');

// 调用Person.call(this, name)没有使用new关键字
let anotherPerson = new AnotherPerson('lili');//抛出错误


