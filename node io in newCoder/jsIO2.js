var readline = require('readline');
rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var K = 1; // 输入K行
var inputs = [];
rl.on('line', function(data) {
    // 获取输入
    inputs.push(data.trim());
    if (K == inputs.length) { //
        // 处理
        var result = deal(inputs);
        // 输出结果
        console.log(result);
        // 清0
        inputs.length = 0;
    }
});
/**
 * [deal description]
 * @param  {[type]} inputs [description]
 * @return {[type]}        [description]
 */
function deal(inputs) {
    var result = '';
    // dosomething
    return inputs;
}