function a() {

}

let b = function () {

};

let what = function c() {

};

let person = {
    get firstName() {
        return 'zxlg';
    },
    sayName: function () {

    }
};

let d = a.bind();
let e = new Function();

console.log(a.name);
console.log(b.name);
console.log(what.name);
// console.log(person.firstName.name);//nodejs8.4.0版本firstName不是一个函数
console.log(person.sayName.name);
console.log(d.name); // 'bound a'
console.log(e.name); // 'anonymous'