var readline = require('readline');
rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(data) {
    // 获取输入
    var inputs = data.trim().split(' ');
    // 处理
    var result = deal(inputs);
    // 输出结果
    console.log(result);
});
/**
 * [deal description]
 * @param  {[type]} inputs [description]
 * @return {[type]}        [description]
 */
function deal(inputs) {
    var result = '';
    // dosomething
    return result;
}