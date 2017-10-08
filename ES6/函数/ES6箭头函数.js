let func1 = value => { return value };
let res = func1(1);
console.log(res)

let func2 = value => ({ value: value, name: 'temp' });
let res2 = func2(1);
console.log(res2);

// 立即执行函数
let func3 = ((value) => {
    return {
        value: value,
        name: 'temp'
    }
})('very good');

console.log(func3.value);

let func4 = () => { }
// let instance = new func4();//报错
//查看箭头函数类型
console.log(typeof func4);
console.log(func4 instanceof Function);
console.log(Object.prototype.toString.call(func4));

let arr = [1, 7, 6, 3, 2];
arr.sort((a, b) => { a - b });
// arr.sort((a, b) =>  {return a - b} );
console.log(arr);

// 箭头函数本身没有this,arguments，但能访问外围函数的arguments,this
function arguments_arrow() {
    this.name = "zxlg";
    return () => {
        console.log(this.name)
        return arguments[0]
    };
}
let result = arguments_arrow(5);
console.log(result());

function func5(){
    this.name = name;
}
console.log(func5);
