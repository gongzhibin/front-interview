//1.不定参数只能放在函数参数末尾，且只能有一个
//2.不定参数不能拥有对象字面量setter之中，对象字面量的参数有且只能有一个
// keys为参数数组
function restParm(object, ...keys) {
    let result = Object.create(null);
    for (let i = 0, len = keys.length; i < len; i++) {
        result[keys[i]] = object[keys[i]];
    }
    return result;
}
let person = {
    name: 'zxlg',
    age: 24,
    sex: 'boy'
};
let me = restParm(person, 'name', 'age');
console.log(me.age);