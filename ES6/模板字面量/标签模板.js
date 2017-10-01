//标签模板控制字符串模板输出结果
//标签模板模拟默认行为
function tag(literal, ...substitutions) {
    let result = '';
    for (let i = 0; i < substitutions.length; i++) {
        result += literal[i];
        result += substitutions[i];
    }
    //substitutions的长度比literal短1
    //合并最后一个literals
    result += literal[literal.length - 1];
    return result;
}

let count = 10;
let price = 0.25;
let msg = tag`${count} items cost $${(count * price).toFixed(2)}.`
console.log(msg);